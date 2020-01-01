import * as React from "react";
import { render } from "@testing-library/react";
import Table from "./table";

test("table renders correctly", () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street"
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "20 D Wall street"
    }
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "ascends",
      sorter: (a, b, sortOrder) => {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (!sortOrder || sortOrder === "ascends") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      }
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b, sortOrder) => {
        if (!sortOrder || sortOrder === "ascends") {
          return a.age - b.age;
        }
        return b.age - a.age;
      }
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: (a, b, sortOrder) => {
        var nameA = a.address.toUpperCase(); // ignore upper and lowercase
        var nameB = b.address.toUpperCase(); // ignore upper and lowercase
        if (!sortOrder || sortOrder === "ascends") {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      }
    }
  ];

  const { asFragment } = render(
    <Table dataSource={dataSource} columns={columns} />
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <table
        class="table__TableEl-ep86xw-0 gXXjSc"
      >
        <thead>
          <tr>
            <th
              class="table-head__Th-sc-19pnxcl-1 gutFPX"
            >
              <div
                class="table-head__FlexWrap-sc-19pnxcl-2 kYrMUr"
              >
                <span>
                  Name
                </span>
                <span
                  class="table-head__IconWrapper-sc-19pnxcl-0 lkKcxF"
                >
                  <svg
                    fill="#e8e8e8"
                    height="21"
                    viewBox="0 0 24 24"
                    width="21"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    />
                    <path
                      d="M7 10l5 5 5-5H7z"
                    />
                  </svg>
                  <svg
                    fill="#0fb877"
                    height="21"
                    viewBox="0 0 24 24"
                    width="21"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    />
                    <path
                      d="M7 14l5-5 5 5H7z"
                    />
                  </svg>
                </span>
              </div>
            </th>
            <th
              class="table-head__Th-sc-19pnxcl-1 gutFPX"
            >
              <div
                class="table-head__FlexWrap-sc-19pnxcl-2 kYrMUr"
              >
                <span>
                  Age
                </span>
                <span
                  class="table-head__IconWrapper-sc-19pnxcl-0 lkKcxF"
                >
                  <svg
                    fill="#e8e8e8"
                    height="21"
                    viewBox="0 0 24 24"
                    width="21"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    />
                    <path
                      d="M7 10l5 5 5-5H7z"
                    />
                  </svg>
                  <svg
                    fill="#e8e8e8"
                    height="21"
                    viewBox="0 0 24 24"
                    width="21"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    />
                    <path
                      d="M7 14l5-5 5 5H7z"
                    />
                  </svg>
                </span>
              </div>
            </th>
            <th
              class="table-head__Th-sc-19pnxcl-1 gutFPX"
            >
              <div
                class="table-head__FlexWrap-sc-19pnxcl-2 kYrMUr"
              >
                <span>
                  Address
                </span>
                <span
                  class="table-head__IconWrapper-sc-19pnxcl-0 lkKcxF"
                >
                  <svg
                    fill="#e8e8e8"
                    height="21"
                    viewBox="0 0 24 24"
                    width="21"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    />
                    <path
                      d="M7 10l5 5 5-5H7z"
                    />
                  </svg>
                  <svg
                    fill="#e8e8e8"
                    height="21"
                    viewBox="0 0 24 24"
                    width="21"
                  >
                    <path
                      d="M0 0h24v24H0V0z"
                      fill="none"
                    />
                    <path
                      d="M7 14l5-5 5 5H7z"
                    />
                  </svg>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              class="table-body__Td-sc-1sw4qbt-0 clHVNp"
            >
              John
            </td>
            <td
              class="table-body__Td-sc-1sw4qbt-0 clHVNp"
            >
              42
            </td>
            <td
              class="table-body__Td-sc-1sw4qbt-0 clHVNp"
            >
              20 D Wall street
            </td>
          </tr>
          <tr>
            <td
              class="table-body__Td-sc-1sw4qbt-0 clHVNp"
            >
              Mike
            </td>
            <td
              class="table-body__Td-sc-1sw4qbt-0 clHVNp"
            >
              32
            </td>
            <td
              class="table-body__Td-sc-1sw4qbt-0 clHVNp"
            >
              10 Downing Street
            </td>
          </tr>
        </tbody>
      </table>
    </DocumentFragment>
  `);
});
