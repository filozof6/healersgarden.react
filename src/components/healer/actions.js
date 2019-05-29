import types from "./types";

const create = () => ({
  type: types.CREATE
});

const read = healer => ({
  type: types.READ,
  payload: {
    healer
  }
});

const update = (id, healer) => ({
  type: types.UPDATE,
  payload: {
    id,
    healer
  }
});

const remove = id => ({
  type: types.REMOVE,
  payload: {
    id
  }
});

const list = () => {
  /* fetch("http://localhost:3001/healers")
    .then(res => res.json())
    .then(healers => {
      console.log("dispatching", healers);
      dispatch({
        type: types.LIST,
        payload: healers
      });
    });*/
  /*let healers = [
    {
      id: 1,
      name: "json-server",
      description: "typicode",
      photo: "edgar-centro.jpg"
    }
  ];
  console.log("dispatching", healers);*/
  return {
    type: types.LIST
  };
};

export default {
  create,
  read,
  update,
  remove,
  list
};
