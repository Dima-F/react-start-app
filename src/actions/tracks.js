let mockApiData = [
    {
        id:1,
        name:'First'
    },
    {
        id:2,
        name:'Second'
    },
    {
        id:3,
        name:'Third'
    },
    {
        id:4,
        name:'Forth'
    }
];


export const getTracks = () => dispatch => {
        setTimeout(()=>{
            console.log('I got tracks');
            dispatch({type:'FETCH_TRACKS-SUCCESS', payload: mockApiData})
        },2000);
    }
