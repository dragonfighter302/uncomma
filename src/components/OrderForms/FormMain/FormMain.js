import React, {useState} from 'react';
import FormOrder from '../FormOrder/FormOrder'
import FormOrderDetails from '../FormOrderDetails/FormOrderDetails'

const FormMain = () => {
    const [state, setState] = useState({
        typeOfOrder: '',
        name: '',
        email: '',
        description: '',
        step: 1
    });

    const nextStep = () => {
        if (state.typeOfOrder !== '') {
            setState({...state, step: state.step + 1});
        }
    }

    const prevStep = () => {
        setState({
            typeOfOrder: '',
            name: '',
            email: '',
            description: '',
            step: state.step - 1
        });
    }

    const handleChange = (input) => (event) => {
        setState({...state, [input]: event.target.value});
    }

    const sendMessage = () => {
        const {typeOfOrder, name, email, description} = state;

        if (typeOfOrder && name && email && description !== '') {
            // This code must be on the backend as the part of web api to safely interact with API keys and the React frontend
            const TOKEN = '';
            const CHAT_ID = '';

            const url = 'https://api.telegram.org/bot' + TOKEN + '/sendMessage';
            //
            const body = JSON.stringify({
                chat_id: CHAT_ID,
                parse_mode: 'Markdown',
                text: `Новый заказ: \nИмя и фамилия: ${name}\nТип заказа: ${typeOfOrder}\nEmail: ${email}\nОписание: ${description}`
            });

            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.send(body);
            if (xhr.status === 200) {
                alert('Your order has been accepted');
            } else {
                alert('An error has occurred')
            }

            setState({
                typeOfOrder: '',
                name: '',
                email: '',
                description: '',
                step: 1
            });
        } else {
            alert('You did not fill in all fields');
        }
    };

    const render = (step) => {
        switch (step) {
            case 1:
                return (
                    <FormOrder
                        step={step}
                        nextStep={nextStep}
                        handleChange={handleChange}
                    />
                )
            case 2:
                return (
                    <FormOrderDetails
                        step={step}
                        handleChange={handleChange}
                        prevStep={prevStep}
                        sendMessage={sendMessage}
                    />
                )
            default:
                return (
                    <div>
                        <h1>Something went wrong :(</h1>
                        {console.log('something went wrong')}
                    </div>)
        }
    }

    return (
        <React.Fragment>
            {render(state.step)}
        </React.Fragment>
    )
}

export default FormMain;