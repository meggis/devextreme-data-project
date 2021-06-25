export default ({ axios }) => {
  return {
    async getHeroPersons() {
      const { data } = await axios.get("/api/items").then((data) => data);
      return data.items;
    },
    async getHeroPerson(id) {
      const { data } = await axios.get(`/api/items?id=${id}`);
      return data;
    },
    async getItemsByPublisher(publisher) {
      const { data } = await axios.get(`/api/items?publisher=${publisher}`);
      return data;
    },
  };
};

// axios.get(`/post/${postId}/comment`)

// const response = {
//  data: {
//    data: {
//      asdas: 'asdasd'
//    }
//  },
//  responseStatus: {

//  }
// }

// .then(({data}) => data)
