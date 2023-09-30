import React from 'react'
import TripElement from './TripElement/TripElement'
import FilterElement from './FilterElement/FilterElement'
import { useState } from 'react'
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native'

function Travel() {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(0); // integer state
  let cityArray = [
    {id:1,cityName:"New York", description:"Andata e ritorno", price:"383", imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/432px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"},
    {id:2,cityName:"Bruxelles", description:"Andata e ritorno", price:"121", imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Grand_Place_Bruselas_2.jpg/198px-Grand_Place_Bruselas_2.jpg"},
    {id:3,cityName:"Amsterdam", description:"Andata e ritorno", price:"169", imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Concertgebouw_04.jpg/1280px-Concertgebouw_04.jpg"},
    {id:4,cityName:"Tel Aviv", description:"Andata e ritorno", price:"229", imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Hashalom_interchange.jpg/432px-Hashalom_interchange.jpg"},
    {id:5,cityName:"Venezia", description:"Andata e ritorno", price:"123", imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Santa_Maria_della_Salute_%2850428075772%29.jpg/417px-Santa_Maria_della_Salute_%2850428075772%29.jpg"},
    {id:6,cityName:"Catania", description:"Andata e ritorno", price:"84", imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Catania-Etna-Sicilia-Italy-Castielli_CC0_HQ1.JPG/405px-Catania-Etna-Sicilia-Italy-Castielli_CC0_HQ1.JPG"},
  ]
  let shownTrip = cityArray[0];
  let [parameters, setParameters] = useState({
    "City Break": false,
    "Romatismo": false,
    "Cultura": false,
    "Mare": false,
    "Food and Wine": false,
  })

  function checkFunc(event) {
    console.log(event.target.value)
    console.log(parameters[event.target.value])
    parameters[event.target.value] = !parameters[event.target.value];
    console.log(parameters[event.target.value])
    setParameters(parameters);
    setValue(value => value + 1);
  }
  function modalAppear (id) {
    shownTrip = cityArray.find(a=>a.id==id)
    setModalVisible(true)
  }
  return (
    <div>
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Destination: {shownTrip["cityName"]}</Text>
            <Text style={styles.modalText}>Description: {shownTrip["description"]}</Text>
            <Text style={styles.modalText}>Price: {shownTrip["price"]}</Text>
            <Text style={styles.modalText}>Tags: {Object.keys(parameters).map(a=> {
              if (parameters[a]) return a+" "
              else return ""
            })}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Info</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <div style={{display:"flex",justifyContent:"center"}}>
        <FilterElement parameters={parameters} checkFunc={checkFunc}/>
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        {
          cityArray.slice(0,3).map(city=>{
            return <TripElement showInfo={modalAppear} id={city.id} key={city.id} cityName={city.cityName} description={city.description} price={city.price} imgSrc={city.imgSrc}/>
          })
        }
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        {
          cityArray.slice(3,6).map(city=>{
            return <TripElement showInfo={modalAppear} id={city.id} key={city.id}  cityName={city.cityName} description={city.description} price={city.price} imgSrc={city.imgSrc}/>
          })
        }
      </div>
    </div>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default Travel