// https://randomuser.me/
const url = "https://randomuser.me/api/";

// récupère les infos de l'utilisateur et les retourne dans un objet
const fetchUser = async () => {
  try {
    const response = await fetch(url);
    const {
      results: [data],
    } = await response.json();

    //destructurer
    const { age } = data.dob;
    const {
      street: { number, name },
    } = data.location;
    const { first, last } = data.name;
    const email = data.email;
    const phone = data.phone;
    const { password } = data.login;
    const { large: image } = data.picture;

    //return
    return {
      age: age,
      street: number + " " + name,
      name: first + " " + last,
      email: email,
      phone: phone,
      password: password,
      image,
    };
  } catch (error) {
    console.log(error);
  }
};

export default fetchUser;
