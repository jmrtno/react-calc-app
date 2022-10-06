import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";


const Functions = ({ onContentClear, onDelete, toLinkedIn }) => (
    <section className="functions">
        <Button type="button-long-text" text="CA" clickHandler={onContentClear} />
        <Button type="button-short-text" text="C" clickHandler={onDelete} />
        <Button type="button-ln" text="ln" clickHandler={toLinkedIn} />
    </section>
)


Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}


export default Functions