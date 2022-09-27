import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { db } from "../db";

function DetailsStudents() {
	const students = useLiveQuery(() => db.student.toArray());

	console.log({ students });
	return (
		<div>
			{students?.map(({ name, email, gender, phonenumber }) => (
				<div key={name}>
					{name}, {email}, {gender}, {phonenumber}
				</div>
			))}
		</div>
	);
}

export default DetailsStudents;