import './App.css'
import {FusionStorm} from "./FusionStorm.jsx";
import {useEffect, useState} from "react";


function App() {
    const [deuteriumReactions, setDeuteriumReactions] = useState(1)
    const [tritiumReactions, setTritiumReactions] = useState(1)


    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        const navElement = document.getElementById("learn-more");
        const fusionSubtitle = document.getElementById("fusion-subtitle");
        const fusionDataEnergy = document.getElementById("fusion-data-energy");
        const fusionDataCarbon = document.getElementById("fusion-data-carbon");
        const fusionDataWaste = document.getElementById("fusion-data-waste");
        const fusionDataSafety = document.getElementById("fusion-data-safety");
        const fusionEnergyDemo = document.getElementById("fusion-energy-demo");
        const fusionText = document.getElementById("fusion-text");
        const fusionTitle = document.getElementById("fusion-title");
        const fusionStorm = document.getElementById("fusionstorm");

        let fusionTitleText = "NUCLEAR FUSION";
        let fusionTitleColor = null;


        let constant_top = 0

        function makeElementFixed(elementId) {
            const element = document.getElementById(elementId);
            // console.log(document.getElementById("fusion-title").clientHeight)
            if (!element) return;

            const rect = element.getBoundingClientRect();
            // const topOffset = rect.top+34.304+(56.320 / 2)+5;
            const topOffset = rect.top + 34.304 + (document.getElementById("fusion-title").clientHeight / 2) + 5;

            element.style.position = 'fixed';
            if (constant_top === 0) {
                constant_top = topOffset
                element.style.top = `${topOffset}px`;
                console.log(topOffset)
            } else {
                element.style.top = `${constant_top}px`;
            }
        }


        function changeCss() {

            requestAnimationFrame(() => {
                // console.log(scrollY)
                // Update navigation element opacity
                navElement.style.opacity = scrollY > 50 ? 0 : 1;

                // Update element opacities
                fusionSubtitle.style.opacity = mapRange(scrollY, 170, 190, 1, 0);
                fusionDataEnergy.style.opacity = mapRange(scrollY, 1000, 1100, 0, 1);
                fusionDataCarbon.style.opacity = mapRange(scrollY, 1160, 1220, 0, 1);
                fusionDataWaste.style.opacity = mapRange(scrollY, 1300, 1360, 0, 1);
                fusionDataSafety.style.opacity = mapRange(scrollY, 1420, 1480, 0, 1);
                fusionEnergyDemo.style.opacity = mapRange(scrollY, 1900, 2200, 0, 1);

                // Update fusion text position
                if (scrollY > 190) {
                    // fusionText.style.position = "fixed";
                    // // fusionText.style.top = "226px";
                    // fusionText.style.top = "27.033492822966508vw";
                    makeElementFixed("fusion-text")
                } else {
                    fusionText.style.position = null;
                    fusionText.style.top = null;
                }

                // Update fusion title


                if (scrollY > 2800) {
                    fusionTitleText = "SOURCES";
                    fusionTitleColor = "white";
                } else if (scrollY > 1880) {
                    fusionTitleText = "ENERGY";
                    fusionTitleColor = "white";
                } else if (scrollY > 850) {
                    fusionTitleText = "THIS MEANS";
                    fusionTitleColor = "white";
                    fusionTitle.dataset.title = "t"
                } else if (scrollY > 280) {
                    fusionTitleText = "INTRODUCTION";
                    fusionTitleColor = "white";
                    fusionTitle.dataset.title = "i"
                } else {
                    fusionTitleText = "NUCLEAR FUSION";
                    fusionTitleColor = null;
                    fusionTitle.dataset.title = "n"
                }
                // if (scrollY > 280 && scrollY < 850 && window.matchMedia("(max-width: 500px)").matches) {
                //     fusionTitle.style.fontSize = "10.24vw"
                // } else {
                //     fusionTitle.style.fontSize = null
                // }

                fusionTitle.innerHTML = fusionTitleText;
                fusionTitle.style.color = fusionTitleColor;

                // Update fusion storm brightness
                fusionStorm.style.filter = "brightness(" + mapRange(scrollY, 2900, 3200, 1, 0) + ")";

                // Update fusion text position based on scroll position
                if (scrollY > 2900) {
                    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2;
                    fusionText.style.top = mapRange(scrollY, 2900, 3200, constant_top, viewportHeight) + "px";
                }
            });
        }


        function mapRange(value, inputMin, inputMax, outputMin, outputMax) {
            // Clamp the value to the input range
            value = Math.min(Math.max(value, inputMin), inputMax);

            // Map the clamped value to the output range
            return ((value - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) + outputMin;
        }

        window.addEventListener("scroll", changeCss, {
            passive: true
        });
    }, [])


    // const SpaceDust = useMemo(() => {
    //     <FusionStorm/>
    // }, [])

    return (
        <>
            <FusionStorm/>
            <a className="inspire" id="inspire" href="https://usfusionenergy.org/opportunities" target="_blank">Inspire</a>
            <a className="about" href="https://horacehoff.github.io" target="_blank">About</a>

            <div className="fusion-text" id="fusion-text">
                <h1 className="fusion-title" id="fusion-title">NUCLEAR FUSION</h1>
                <h2 className="fusion-subtitle" id="fusion-subtitle">CLEAN-ENERGY FOR ALL OF HUMANITY</h2>
            </div>
            <p id="learn-more" className="learn-more">Learn More <svg width="24" height="24" fill="none"
                                                                      xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_489_191220)">
                    <path d="M12 3v18m0 0l-7-6m7 6l7-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"></path>
                </g>
                <defs>
                    <clipPath id="clip0_489_191220">
                        <path fill="currentColor" d="M0 0H24V24H0z"></path>
                    </clipPath>
                </defs>
            </svg></p>
            <iframe className="fusion-intro-video"
                    src="https://www.youtube-nocookie.com/embed/g_BUbEIyaz8?si=j7sP_XgsP86DhOqJ"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className="fusion-data-title">
              <span className="fusion-data-stat" id="fusion-data-energy">
                  ⚡️ How much energy ?
              <br/>
              <span className="fusion-data-desc" style={{width: "calc(100vw - 270px)"}}>Nuclear fusion generates 4x more energy than nuclear fission</span>
              <br/><br/>
              </span>
                <span id="fusion-data-carbon" className="fusion-data-stat">
                  🏭 Carbon emissions ?
              <br/>
              <span className="fusion-data-desc helium" style={{width: "calc(100vw - 9px)"}}>Nuclear fusion only releases helium, a safe and inert gas that is harmless to the environment</span>
              <br/><br/>
              </span>
                <span id="fusion-data-waste" className="fusion-data-stat">
                  ☢️ Radioactive waste ?
              <br/>
              <span className="fusion-data-desc" style={{width: "calc(100vw - 250px)"}}>Nuclear fusion does not generate any kind of waste whatsoever.</span>
              <br/><br/>
              </span>
                <span id="fusion-data-safety" className="fusion-data-stat">
                  💥 Nuclear explosions !?
              <br/>
              <span className="fusion-data-desc" style={{width: "calc(100vw - 53px)"}}>There is no risk of a runaway/meltdown with nuclear fusion, as opposed to nuclear fission</span>
              </span>
            </div>
            <div className="fusion-energy-demo" id="fusion-energy-demo">
                <label htmlFor="atomReactions">Deuterium/Tritium mass</label>
                <br/>
                <input type="range" min="1" max="100" value={deuteriumReactions} className="fusion-energy-slider"
                       id="atomReactions" onChange={e => {
                    setDeuteriumReactions(e.target.value)
                    document.getElementById("deuteriumval").innerHTML = e.target.value + "g"
                    let unit = "kWh"


                    let deuterium_atoms = e.target.value / (3.34440385 * (10 ** -24))
                    let tritium_atoms = tritiumReactions / (5.00814985 * (10 ** -24))
                    let atoms = Math.min(deuterium_atoms, tritium_atoms)
                    let energy = atoms * 17.58 * 4.45037828 * (10 ** -20)
                    let energy_kwh = energy
                    if (energy * (10 ** -12) > 1) {
                        energy = energy * (10 ** -12)
                        unit = "PWh"
                    } else if (energy * (10 ** -9) > 1) {
                        energy = energy * (10 ** -9)
                        unit = "TWh"
                    } else if (energy * (10 ** -6) > 1) {
                        energy = energy * (10 ** -6)
                        unit = "GWh"
                    } else if (energy * (10 ** -3) > 1) {
                        energy = energy * (10 ** -3)
                        unit = "MWh"
                    }
                    document.getElementById("fusion-energy-value").innerHTML = (Math.round(energy * 10) / 10).toFixed(1) + unit
                    document.getElementById("fusion-energy-value-homes").innerHTML = Math.floor(energy_kwh / 10715) + " homes for a year"
                    document.getElementById("fusion-energy-value-wh").innerHTML = Math.floor(energy_kwh * 1000 / 60) + " light bulbs/1h"


                }}/>
                <span className="fusion-energy-slider-values" id="deuteriumval">1g</span>
                <br/>
                <input type="range" min="1" max="100" value={tritiumReactions} className="fusion-energy-slider"
                       id="atomReactions" onChange={e => {
                    setTritiumReactions(e.target.value)
                    document.getElementById("tritiumval").innerHTML = e.target.value + "g"
                    let unit = "kWh"


                    let deuterium_atoms = deuteriumReactions / (3.34440385 * (10 ** -24))
                    let tritium_atoms = e.target.value / (5.00814985 * (10 ** -24))
                    let atoms = Math.min(deuterium_atoms, tritium_atoms)
                    let energy = atoms * 17.58 * 4.45037828 * (10 ** -20)
                    let energy_kwh = energy
                    if (energy * (10 ** -12) > 1) {
                        energy = energy * (10 ** -12)
                        unit = "PWh"
                    } else if (energy * (10 ** -9) > 1) {
                        energy = energy * (10 ** -9)
                        unit = "TWh"
                    } else if (energy * (10 ** -6) > 1) {
                        energy = energy * (10 ** -6)
                        unit = "GWh"
                    } else if (energy * (10 ** -3) > 1) {
                        energy = energy * (10 ** -3)
                        unit = "MWh"
                    }


                    document.getElementById("fusion-energy-value").innerHTML = (Math.round(energy * 10) / 10).toFixed(1) + unit
                    document.getElementById("fusion-energy-value-homes").innerHTML = Math.floor(energy_kwh / 10715) + " homes for a year"
                    document.getElementById("fusion-energy-value-wh").innerHTML = Math.floor(energy_kwh * 1000 / 60) + " light bulbs/1h"


                }}/>
                <span className="fusion-energy-slider-values" id="tritiumval">1g</span>
                <h3>Energy released:</h3>
                <span id="fusion-energy-value">17,59mV</span>
                <br/>
                <span id="fusion-energy-value-wh">2603677 light bulbs/1h</span>
                <br/>
                <span id="fusion-energy-value-homes">14 homes for a year</span>
            </div>
            <div className="fusion-info-sources">
                <a href="https://www.iter.org/sci/Fusion">ITER</a>
                <br/>
                <a href="https://ccfe.ukaea.uk/fusion-energy/fusion-in-brief/">Culham Centre For Fusion Energy</a>
                <br/>
                <a href="https://en.wikipedia.org/wiki/Tritium">Tritium - Wikipedia</a>
                <br/>
                <a href="https://en.wikipedia.org/wiki/Deuterium">Deuterium - Wikipedia</a>
                <br/>
                <a href="https://en.wikipedia.org/wiki/Nuclear_fusion#Process">Nuclear Fusion - Wikipedia</a>

            </div>
            <div style={{marginBottom: "3500px"}}>
            </div>
        </>
    )
}

export default App
