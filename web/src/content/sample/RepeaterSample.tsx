import * as React from 'react'
import Table from '../common/Table';
import Icon from '../common/Icon';

interface RepeaterSampleTypes {
    isSpinning: boolean;
    sampleDataError: boolean;
    sampleData: Object[];
    getSampleData: () => void;
}

const RepeaterSample = (props: RepeaterSampleTypes) => {
    return (
        <div className='repeater-sample-container'>
            {props.sampleDataError && 
                <h1>an error has occured!!!</h1>
            }
            {props.sampleData && 
                <GenericDataDisplay data={props.sampleData} />
            }
            {props.isSpinning &&  
                <div className="search-results-spinner">
                    <Icon id="spinner" faIcon="spinner fa-pulse"/>
                </div>
            }
            {!props.isSpinning && 
                <button onClick={props.getSampleData}>Fetch sample data</button>
            }
        </div>
    )
}


const GenericDataDisplay = (props: {data: Object[]}) => {
    const columnHeadersKeys = Object.keys(props.data[0])

    let columnHeaders = {}
    for (let i = 0; i < columnHeadersKeys.length; i++){
        columnHeaders[columnHeadersKeys[i]] = columnHeadersKeys[i]
    }

    const smallExampleDataSet = props.data.slice(0,4) 

    return (
        <div className='generic-data-container'>
            <Table
                columnHeaders={columnHeaders}
                data={smallExampleDataSet}
            />
        </div>
    )
    
}

export default RepeaterSample