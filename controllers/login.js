const login = async (email, password, generateToken) => {    
    
        try{
            const dataBDD = await this._emailExist(email) 
            
            if(!dataBDD[0]){
                return {response: "E-mail ou mot de passe invalide"}
            } else if(email.length > 255 || password.length > 255){
                return {response:'Utiliser moins de 250 caractères'}
            } else if(email.length <= 0 || password.length <= 0){
                return {response:"Veuillez remplir tous les champs"}
            }
            
            const passwordIsValide = await bcrypt.compare(password,dataBDD[0].password)
            const token = await this.generateResponse(dataBDD[0], generateToken)
            
            if(passwordIsValide){
                return{response:passwordIsValide, token}
            }
            
            return{response:"E-mail ou mot de passe invalide"}
        } catch (err){
            return err
        }
            
    }
    