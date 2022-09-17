import React from 'react'; 
import "./css.css"


const InputTribu = ({ label, type, name, onChangeHandler, value }) => {
    return (
        <div>

            <div class="new_user">
                <div class="form-group">
                    <label for="Email" class="text-light">{label}</label> 
                    <div class="couleur">

                    <input type={type} name={name} value={value} onChange={onChangeHandler} /> 
                    </div>

                </div>
            </div>

        </div>
    );
};

export default InputTribu;