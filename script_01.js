"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration 
function test()
{
    console.log("Hallo Karsten!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen() 
{
    // what happens in VEGAS ... alles in der function bleibt gekapselt.
    let firstName = "Karsten";
    console.log("Hallo " + firstName + "!");



}

// console.log(firstName); // Fehler: Scope!


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Dario"); // call + Argument(e)
// ausgabeNamenParam("Sven");
 // Argument (Daten für Parameter)

function ausgabeNamenParam(firstName) // Parameter
{
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Dario", "Lucic");
// ausgabeNamenParams("Jamshid", "Rahmanzai");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));


function ausgabeNamenParams(firstName, familyName)
 {
    console.log("Hallo " + (firstName + " " + familyName) + "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Jamshid", "Rahmanzai");

function ausgabeNamenParams2(firstName, familyName)
 {
    // 1.Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo" + GAP + (firstName + GAP + familyName) + "!";


    // 2.Funktionalität: string output
    console.log(outputStr);
}
    
/***** Funktionen 03b *****/
// Trennen der Funktionalitäten in Funktionen | return


output(getString("Maxine","Mützerich"));
output(getString(prompt("Vorname"),prompt("Nachnahme")));

function getString(firstName,familyName)
 {
    const GAP = " ";
    let outputStr = "Hallo" + GAP + (firstName + GAP + familyName) + "!";
    return outputStr; // return sendet Daten an den call zurück
    console.log(outputStr); // return bricht die Funktion ab!
}

/** INPUT --> Parameter | return --> OUTPUT  **/


 // 2.Funktionalität: string output
//  output("Hi");
//  output(2);
//  output(true);
function output(outputData)
  {
    console.log(outputData);
 }

