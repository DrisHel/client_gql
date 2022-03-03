const models = require('../models/index');


const Query = {
    todosUsuarios: async() =>{
        const users = await models.User.findAll({
            include:{
                model:models.Role,
                as:'roles'
            }
        });
        return users;
    },

    umUsuario: async(parent,{id}) =>{
        const user = await models.User.findByPk(id,{
            include:{
                model:models.Role,
                as:'roles'
            }
        });
                if (!user) {
            throw new Error('Usuário não encontrado.')
        }
        return user;
    },

    todasFuncoes: async() =>{
        const roles = await models.Role.findAll();
        return roles;
    },

    umaFuncao: async(parent,{id}) =>{
        const role = await models.Role.findByPk(id);
                if (!role) {
            throw new Error('Função não encontrada.')
        }
        return role;
    },

  

};

const Mutation = {
    createUser: async (parent,{name, email, roles}) => {
     const user = await models.User.create({name, email,roles},{
        include:{
            model:models.Role,
            as:'roles'
        }
    });
        return user;
    },

    updateUser:async(parent,{id,name, email,roles}) =>{
        try {
            const user = await models.User.update({name,email,roles},{
                where:{
                    id:id,

             }, 
            include:{
                model:models.Role,
                as:'roles'       
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
     },


     createRole: async (parent,{name, active}) => {
        const role = await models.Role.create({name, active});
           return role;
       },

       updateRole:async(parent,{id,name, active}) =>{
        try {
            const role = await models.Role.update({name,active},{
                where:{
                    id:id
                } 
             })
             return true; 
        } catch (error) {
           return false; 
        }
     },

     deleteRole:async(parent,{id}) => {
        try {
         await models.Role.destroy({
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