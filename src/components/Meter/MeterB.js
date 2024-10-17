import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { useGlobalData } from '../../context/data/DataState';

export default function MeterB() {
    const { bulbGaugeVoltage,
        bulbGaugePower,
        bulbGaugeCurrent,
        heaterGaugePower,
        heaterGaugeCurrent,
        heaterGaugeVoltage,
        inductionGaugeCurrent,
        inductionGaugeVoltage,
        inductionGaugePower,
    } = useGlobalData();
    return (
        <>
            <div className="machine">
                <h2>Machine-1</h2>
                <div className="gauge-container">
                    <div className="gauge">
                        <h5>Zone-A Power</h5>
                        <div className="power">
                            <ReactSpeedometer
                                maxValue={20}
                                value={bulbGaugePower}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="gauge">
                        <h5>Zone-A Current</h5>
                        <div className="current">
                            <ReactSpeedometer
                                maxValue={1}
                                value={bulbGaugeCurrent}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="gauge">
                        <h5>Zone-A Voltage</h5>
                        <div className="voltage">
                            <ReactSpeedometer
                                maxValue={500}
                                value={bulbGaugeVoltage}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="machine">
                <h2>Machine-2</h2>
                <div className="gauge-container">
                    <div className="gauge">
                        <h5>Zone-A Power</h5>
                        <div className="power">
                            <ReactSpeedometer
                                maxValue={20}
                                value={heaterGaugePower}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="gauge">
                        <h5>Zone-A Current</h5>
                        <div className="current">
                            <ReactSpeedometer
                                maxValue={1}
                                value={heaterGaugeCurrent}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="gauge">
                        <h5>Zone-A Voltage</h5>
                        <div className="voltage">
                            <ReactSpeedometer
                                maxValue={500}
                                value={heaterGaugeVoltage}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="machine">
                <h2>Machine-3</h2>
                <div className="gauge-container">
                    <div className="gauge">
                        <h5>Zone-A Power</h5>
                        <div className="power">
                            <ReactSpeedometer
                                maxValue={20}
                                value={inductionGaugePower}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="gauge">
                        <h5>Zone-A Current</h5>
                        <div className="current">
                            <ReactSpeedometer
                                maxValue={1}
                                value={inductionGaugeCurrent}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                    <div className="gauge">
                        <h5>Zone-A Voltage</h5>
                        <div className="voltage">
                            <ReactSpeedometer
                                maxValue={500}
                                value={inductionGaugeVoltage}
                                segments={2}
                                currentValueText="Good"
                                needleColor="steelblue"
                                startColor="green"
                                endColor="red"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
