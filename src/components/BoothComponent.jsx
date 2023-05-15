import { Accordion, Table } from "flowbite-react";
import Image from "next/image";

export default function BoothComponent({ boothList, bankImage }) {
  return (
    <Accordion className="mt-5 font-poppins text-[18px]" collapseAll={true}>
      <Accordion.Panel>
        <Accordion.Title>
          <div className="flex justify-end items-center  flex-row">
            <Image
              src={bankImage}
              alt="bankImage"
              className="object-contain w-[150px] h-[30px]"
            />
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <Table striped={true} hoverable={true}>
            <Table.Head>
              <Table.HeadCell>#</Table.HeadCell>
              <Table.HeadCell>Terminal Name</Table.HeadCell>
              <Table.HeadCell>Location</Table.HeadCell>
            </Table.Head>

            {boothList.map((item) => (
              <Table.Body key={item.id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.id}
                  </Table.Cell>
                  <Table.Cell>{item.terminal}</Table.Cell>
                  <Table.Cell>{item.location}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
