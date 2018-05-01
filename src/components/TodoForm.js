import React, { Component } from 'react';
import {todos} from "../todos";

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
    }

    handleInput(e) {
        console.log(e.target.value, e.target.name);
    }

    render() {
        return (
            <div className="card">
                <form className="card-body">
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="title"
                               onChange={this.handleInput}
                               placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="responsible"
                               onChange={this.handleInput}
                               placeholder="Responsible" />
                    </div>
                    <div className="form-group">
                        <input type="text"
                               className="form-control"
                               name="description"
                               onChange={this.handleInput}
                               placeholder="Description" />
                    </div>

                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            onChange={this.handleInput}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}