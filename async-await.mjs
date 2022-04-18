import { api } from './services/api.mjs';

const getData = async () => {
    const detailPost = await api.getDataPostById(1);
    let dataComments = [];
    if(detailPost.hasOwnProperty('id')){
        // chungs to co bai viet theo id truyen vao
        // lay comment theo bai viet
        dataComments = await api.getDataCommentsByIdPost(detailPost.id);
    }
    console.log(detailPost);
    console.log(dataComments);

}
//getData();
api.getDataPostById(1).then(data => {
    if(data.hasOwnProperty('id')){
        return api.getDataCommentsByIdPost(data.id);
    }
}).then(dt => console.log(dt))
  .catch(err => console.log(err))
  .finally(() => console.log('chay khi then hoac catch da chay xong'));