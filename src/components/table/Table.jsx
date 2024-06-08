// DOC: Table Component
// Description:
// This is a reusable table component that can be used to display data in a table format.
// It takes in the following props:
// - data: an array of objects that contain the data to be displayed
// - headers: an array of strings that contain the headers for the table
// - actions: an array of objects that contain the label and link for the action button
// - ignoreKeys: an array of strings that contain the keys that should be ignored when displaying the data

// Usage Example:
// <Table
//   data={data}
//   headers={["Name", "Email", "Role"]}
//   actions={[{ label: "Edit", link: "/edit" }]}
//   ignoreKeys={["password", "secret"]}
// />

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';

export const Table = ({ data, headers, actions, ignoreKeys = [] }) => {
  const sortedData = [...data].reverse();

  return (
    <div className="w-full">
      <div className={`w-full rounded-lg bg-white px-4 pb-4`}>
        <table className="w-full border-collapse">
          <thead className="sticky top-0 border-b-2 h-14 bg-foreground">
            <tr>
              {headers.map((header, index) => (
                <th
                  className="p-4 text-xs font-semibold text-left text-gray-500 uppercase whitespace-nowrap"
                  key={index}
                >
                  {header}
                </th>
              ))}
              {actions && actions.length > 0 && (
                <th className="p-4 text-xs font-medium text-left uppercase whitespace-nowrap text-textColor-light">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={headers.length + (actions ? 1 : 0)}>
                  <div className="my-8 text-xl font-bold text-textColor-light">No Data</div>
                </td>
              </tr>
            ) : (
              sortedData.map((item, index) => (
                <tr
                  key={index}
                  className="py-5 text-sm font-normal rounded-lg h-11 bg-foreground hover:bg-neutral-200"
                >
                  {headers.map((header, i) => {
                    const key = header.toLowerCase();
                    if (ignoreKeys.includes(key)) {
                      return null;
                    }
                    if (key === 'image') {
                      return (
                        <td
                          className="flex items-center justify-between px-4 py-1 whitespace-nowrap"
                          key={i}
                        >
                          {item[key] ? (
                            <img
                              src={item[key].secure_url}
                              alt="Img"
                              className="w-8 h-8 border rounded"
                            />
                          ) : (
                            'No Image'
                          )}
                        </td>
                      );
                    }
                    return (
                      <td className="max-w-[10px] truncate px-4 py-1" key={i}>
                        {item[key]}
                      </td>
                    );
                  })}
                  {actions && actions.length > 0 && (
                    <td className="px-2 py-1">
                      {actions.map((action, idx) => (
                        <Button asChild key={idx} className="h-6">
                          <Link to={`${action.link}/${item._id}`}>{action.label}</Link>
                        </Button>
                      ))}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
