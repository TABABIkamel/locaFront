import React, { useRef, useState } from "react"
import {StyleSheet, SafeAreaView, Button, View, Text,TextInput } from "react-native"
import Wizard from "react-native-wizard"
import {Picker} from '@react-native-picker/picker';
import NumberPlease from "react-native-number-please";

export default function AddVehicule() {
  const AnneeNumbers = [{ id: "annee",min: 1800, max: new Date().getFullYear() }];
  const wizard = useRef()
  const [isFirstStep, setIsFirstStep] = useState(true)
  const [isLastStep, setIsLastStep] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [gouvernorat, setGouvernorat] = useState('')
  const [rue, setRue] = useState('')
  const [zip, setZip] = useState('')
  const [ville, setVille] = useState('')
  const [maison, setMaison] = useState('')
  const [gamme, setGamme] = useState('')
  const [km, setKm] = useState('')
  const [annee, setAnnee] = useState('');
  const stepList = [
    {
      content: 
            <View style={styles.wrapper}>
              <View style={styles.InputWrapper}>
              <TextInput style={styles.fieldStyles}
                value={gouvernorat}
                placeholder="Enter gouvernorat"
                onChangeText={(val) => {
                  // validation
                  setGouvernorat(val);
                  console.log(val)
                }}
              />
              <TextInput style={styles.fieldStyles}
                value={rue}
                placeholder="Enter Rue"
                onChangeText={(val) => {
                  // validation
                  setRue(val);
                  console.log(val)
                }}
              />
              </View>
              <View style={styles.InputWrapper}>
              <TextInput style={styles.fieldStyles}
                value={ville}
                placeholder="Enter Ville"
                onChangeText={(val) => {
                  // validation
                  setVille(val);
                  console.log(val)
                }}
              />
              <TextInput style={styles.fieldStyles}
                value={zip}
                placeholder="Enter Zip"
                onChangeText={(val) => {
                  // validation
                  setZip(val);
                  console.log(val)
                }}
              />
              </View>
              <View style={styles.InputWrapper}>
              <NumberPlease 
                    digits={AnneeNumbers}
                    values={annee}
                    
                    onChange={(values) => {setAnnee(values);console.log(values)}}
                  />
              <TextInput style={styles.fieldStyles}
                value={gamme}
                placeholder="Enter Gamme"
                onChangeText={(val) => {
                  // validation
                  setGamme(val);
                  console.log(val)
                }}
              />
              <TextInput style={styles.fieldStyles}
                value={maison}
                placeholder="Enter Maison"
                onChangeText={(val) => {
                  // validation
                  setMaison(val);
                  console.log(val)
                }}
              />
              </View>
            
              </View>,
    },
    {
      content: <View style={styles.wrapper}></View>,
    },
    {
      content: <View style={styles.wrapper}></View>,
    },
    {
      content: <View style={styles.wrapper}></View>,
    },
  ]
 
  return (
    <View >
      <SafeAreaView style={{backgroundColor: "#FFF" }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            backgroundColor: "#FFF",
            borderBottomColor: "#dedede",
            borderBottomWidth: 1,
          }}>
          <Button disabled={isFirstStep} title="Prev" onPress={() => wizard.current.prev()} />
          <Text style={styles.textStyle}>{currentStep + 1}. Step</Text>
          <Button disabled={isLastStep} title="Next" onPress={() => wizard.current.next()} />
        </View>
      </SafeAreaView>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Wizard 
          ref={wizard}
          steps={stepList}
          isFirstStep={val => setIsFirstStep(val)}
          isLastStep={val => setIsLastStep(val)}
          onNext={() => {
            console.log("Next Step Called")
          }}
          onPrev={() => {
            console.log("Previous Step Called")
          }}
          currentStep={({ currentStep, isLastStep, isFirstStep }) => {
            setCurrentStep(currentStep)
          }}
        />
        <View style={{ flexDirection: "row", margin: 18 }}>
          {stepList.map((val, index) => (
            <View 
              key={"step-indicator-" + index}
              style={{
                //flex:1, flexDirection: "column", alignItems: "center",
                width: 10,
                marginHorizontal: 6,
                height: 10,
                borderRadius: 5,
                backgroundColor: index === currentStep ? "#fc0" : "#000",
              }}
            />
          ))}
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flew:1,
    justifyContent:'space-evenly',
    alignItems:'center',
    width: 375, 
    height: 700,
    backgroundColor: "rgb(211, 217, 223)",
    
  },
  fieldStyles:{
  //color:'#10100E',
  //backgroundColor:'#708BC1',
  width:100,
  height:30,
  borderRadius:5,
  border:2,
  margin:5,
  },
  textStyle:{
    fontSize: 20,
    fontWeight: "bold"
  },
  InputWrapper: {
    flew:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    
  }
});

