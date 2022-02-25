const models = require('../models/index');


const Query = {
    todosUsuarios: async() =>{
        const users = await models.User.findAll();
        return users;
    },

    umUsuario: async(parent,{id}) =>{
        const user = await models.User.findByPk(id);
                if (!user) {
            throw new Error('Usuário não encontrado.')
        }
        return user;
    }

  

};

const Mutation = {
    createUser: async (parent,{name, email}) => {
     const user = await models.User.create({name, email});
        return user;
    },

    updateUser:async(parent,{id,name, email}) =>{
        try {
            const user = await models.User.update({name,email},{
                where:{
                    id:id
                } 
             })
             return true; 
        } catch (error) {
           return false; 
        }
     },

     deleteUser:async(parent,{id}) => {
       try {
        await models.User.destroy({
            where:{
                id:id
            }
        })
        return true;
       } catch (error) {
           return false;
       }
     }
    
};

module.exports = { Query, Mutation} ; 