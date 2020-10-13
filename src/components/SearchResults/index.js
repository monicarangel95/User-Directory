import React from "react";
import "./style.css";
export default function SearchResults({ employees, handleSort }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>{employees[0] !== undefined && employees[0].name !== undefined ? (
                employees.map(({ login, picture, name, email, phone, dob }) => {
                    return (
                        <tr key={login.uuid}>
                            <td>
                                <img alt={`employee`} src={picture.thumbnail}></img>
                            </td>
                            <td>{name.first} {name.last}</td>
                            <td><a href={"mailto:" + email}>{email}</a></td>
                            <td>{phone}</td>
                            <td>{dob.date.substring(0, 10)}</td>
                        </tr>
                    )
                })) :
                (
                    <></>
                )
            }</tbody>
        </table>
    )
}