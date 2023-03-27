
const initialState = {
    data: true
}

export const TestComponentParent = (props) => {
    const [getData2222, setData] = useState(initialState);
    return (
        <>
            <TestComponent />
        </>
    );
}

export const TestComponent = (props) => {
    const [getData2222, setData] = useState(initialState);
    return (
        <>
            {if(getData222) {
                <div>true</div>

            } else {
                <div>false</div>
            }}
        </>
    );
}