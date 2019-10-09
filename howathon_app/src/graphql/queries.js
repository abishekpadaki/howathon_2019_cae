import gql from 'graphql-tag';

const getLists = variables => gql`
  query lists {
    list(start: 0, end: 10) {
      boxes
      locations{
        name
        id
      }
    }
  }
`;

const getBoxHistory = gql`
  query History($id: String) {
    boxHistory(id: $id){
      dateTime
      location
      components
      boxes
    }
  }
`;

const getLocationHistory = gql`
  query LocationHistory($location: String) {
    locationHistory(location: $location){
      dateTime
      id
      components
      boxes
    }
  }
`;

const getLocationOfBoxes = gql`
  query Boxes($ids:[String], $dateTime: String) {
    boxList(ids: $ids, dateTime: $dateTime){
      dateTime
      location
      components
      boxes
      boxId
    }
  }
`;
export { getLists, getBoxHistory, getLocationHistory, getLocationOfBoxes }