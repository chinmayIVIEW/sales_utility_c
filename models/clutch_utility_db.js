
module.exports = (sequelize,DataTypes)=>{
    const profile = sequelize.define("profile",{
        full_name :{
            type: DataTypes.STRING
        },
        company_name : {
            type : DataTypes.STRING
        },
        email : {
            type : DataTypes.STRING
            // unique : true,
        },
        subject : {
            type : DataTypes.STRING
        },
        messages : {
            type : DataTypes.STRING
        },
        add_company : {
            type : DataTypes.BOOLEAN
        }
    })
    return profile
}