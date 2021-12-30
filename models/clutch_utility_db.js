
module.exports = (sequelize,DataTypes)=>{
    const profile = sequelize.define("profile",{
        full_name :{
            type: DataTypes.STRING,
            defaultValue: null
        },
        company_name : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        email : {
            type : DataTypes.STRING,
            unique : true,
            allowNull:false
        },
        subject : {
            type : DataTypes.STRING,
            defaultValue: null
        },
        messages : {
            type : DataTypes.STRING,
            defaultValue: null
        }
    })
    return profile
}