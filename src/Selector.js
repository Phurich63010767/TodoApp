import './App.css';
import { Select } from 'antd';

const Selector = ({setSelected}) => {

    function handleChangeFilter(e){
        setSelected(e);
        console.log(e);
    }

    return (
        <div className="spacing">Filter : 
            <Select size="small" defaultValue="all"
                style={{
                    width: 100,
                }}
                onChange={handleChangeFilter}
                options={[
                    {
                        value: 'all',
                        label: 'All',
                    },
                    {
                        value: 'active',
                        label: 'Active',
                    },
                    {
                        value: 'finished',
                        label: 'Finished',
                    },
                ]}
            />
        </div>
    )
        
}

export default Selector;