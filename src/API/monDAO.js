import axios from "axios";

class monDAO {
    findAll() {
        return axios.get("https://gabinou.herokuapp.com/plats");
    }

    findOne(id) {
        return axios.get(`https://gabinou.herokuapp.com/plats/${id}`);
    }

    create(plat) {
        return axios.post("https://gabinou.herokuapp.com/ajouterPlat", plat);
    }

    update(id, plat) {
        return axios.put(`https://gabinou.herokuapp.com/modifierPlat/${id}`, plat);
    }

    remove(id) {
        return axios.delete(`https://gabinou.herokuapp.com/supprimerPlat/${id}`);
    }

    login(user) {
        return axios.post("https://gabinou.herokuapp.com/connexion", user)
    }

    register(data) {
        return axios.post("https://gabinou.herokuapp.com/inscription", data)
    }
}
export default new monDAO();