import React from "react";
import { FormattedDate, FormattedNumber } from 'react-intl';

const Job = (props, theme) => {
  const oneOrMany = () => {
    var resp;
    if (navigator.language.includes('es')) {
      if (props.offer.salary === 1) {
        resp = ' millón'
      }
      else {
        resp = ' millones'
      }
    }
    else {
      resp = ' million'
    }
    return resp
  }
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary + oneOrMany()}</td>
      <td>{props.offer.city}</td>
      <td><FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
      /></td>
      <td> <FormattedNumber
        value={props.offer.views}
      /></td>
    </tr>
  );
};

export default Job;
