/**
 * Buatlah action creator untuk membuat action dengan tipe ADD_USER
 * dan payload berupa user yang diterima dari parameter
 * 
 * struktur objek user:
 *  {
 *   id: string,
 *   name: string,
 *   email: string,
 *  }
 */


function addUserActionCreator(id, name, email) {
    // code here
    return {
        type: "ADD_USER",
        payload:{
            id,
            name,
            email
        }
    }
}

console.log(addUserActionCreator('1','adit','aditnegara51@gmail.com'))