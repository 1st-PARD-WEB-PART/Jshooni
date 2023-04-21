import React , {Component} from 'react';

class EventPractice extends Componet {
    state = {message : ''}

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type = "text"
                    name = "니가 입력한거"
                    placeholder = "아무거나 입력해보세요"

                    value = (this.state.message)
                    onChange = {(e)=> {
                            this.setSata({
                                message: e.target.value
                            })
                            console.log(e.target.value);
                        }
                    }
                    />
                    <button onClick={()=>}{
                            alert(this.state.message);
                            this.setState({
                                message: ''
                            });
                        }
                    }>확인 </button>
            </div>
        );
    }
}

export default EventPractice;