/*import {verifyToken} from "../config/token.js"
import parseurl from 'parseurl'

const ADMIN = 'admin'
const USER = 'user'
const PUBLIC = 'public'

const protectedPath = (pathname) => {
    const adminPath = ['getUsers'];
    const userPath = ['userPath'];
    
    const protectedAdmin = adminPath.includes(pathname)
    const protectedUser = userPath.includes(pathname)
    let type = protectedAdmin ? ADMIN : protectedUser ? USER : PUBLIC
    
    return type
}

const accesAutorized = (pathname, userData) => {
    const typePath = protectedPath(pathname)
    
    // etre admin et accede a une route admin
    const adminAcess = userData && userData.admin ? typePath === ADMIN : false
    
    // etre connecter et accede a une route user
    const userAcess = userData && userData.user ? typePath === USER : false
    
    // route public
    const publicAcess = typePath === PUBLIC 
    
    return (publicAcess || adminAcess || userAcess) ? true : false 

}


export default async(req, res, next) => {
    // recupere la route a la quel on souhaite acceder
    const pathname = parseurl(req).pathname.split('/')[1];
    
    console.log(pathname)
    
    // Bear jdlsqdjsqdsq5d6sq74d654sqd4qs6d68sq4d6qs4d
    const headersAuth = req.headers['authorization']
    
    // ['Bear','jdlsqdjsqdsq5d6sq74d654sqd4qs6d68sq4d6qs4d']
    const token = headersAuth ? headersAuth.split(' ')[1] : null
    
    try{
        // ton verrifie le token
        const userData = await verifyToken(token)
        // on verrifie si la route est autoriser
        const acces = accesAutorized(pathname,userData)
        // la reponse dans le cas ou la route n'est pas autoriser
        const response = {response:false, msg:'acces refuser'}
        
        return acces ? next() : res.json(response)
    }catch(err) {
        console.log(err)
        res.sendStatus(401)
    }
}
*/
import parseurl from 'parseurl';
import {verifyToken} from "../config/token.js"

const ADMIN_ROLE_ID = 5

const paths = {
  ADMIN: ['TESTME'],
  USER: ['userPath'],
  PUBLIC : []
};

const getPathType = (pathname) => {
  for (const [key, value] of Object.entries(paths)) {
    if (value.includes(pathname)) {
      return key;
    }
  }
  return 'PUBLIC';
};

const isAccessAuthorized = (pathType, userData) => {
  if(pathType === 'ADMIN' && userData.admin) return true
  if(pathType === 'USER' && userData.user) return true
  if(pathType === 'PUBLIC') return true
  return false
};

const middleware = async (req, res, next) => {
  const pathname = parseurl(req).pathname.split('/')[1];
  const authHeader = req.headers['authorization'];
  const pathType = getPathType(pathname)
  
  if(pathType !== "PUBLIC"){
    if (!authHeader) {
      return res.status(401).json({ message: 'Authorization header missing' });
    }
  
    const [scheme, token] = authHeader.split(' ');
  
    if (scheme !== 'Bearer') {
      return res.status(401).json({ message: 'Invalid authorization scheme' });
    }
  
    const userData = await verifyToken(token);
  
    if (!userData) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    if (!isAccessAuthorized(pathType, userData)) {
      return res.status(401).json({ message: 'Access denied' });
    }
  }

  next();
};

export default middleware;
