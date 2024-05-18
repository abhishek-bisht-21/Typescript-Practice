/**
 * Enums or Enumeration
 * They are named constant. When we there can be only fixed set of values possible we use enums
 * 
 * Ticket status ["Initialised", "cancelled", "resolved", "pending"]
 * ti.status == "resolved"
 */


// enum is kind a like a special class, which has a set of constant. We can use them as set of constants. they are internally mapped
// to a numeric values. Ex: INITIALISED = 0, CANCELLED: 1 .. 
enum TicketStatus {
	Initialised,
	CANCELLED,
	PENDING,
	CLOSED
} 

const Ticket = {
	id: 1,
	title: "new ticket",
	status: TicketStatus.Initialised
}

console.log(Ticket);


enum StatusCodes {
	NotFound = 404,
	Success = 200,
	Accepted = 202,
	Created = 201,
	BadRequest = 400
}

const response = {
	url: "www.something.com",
	status: StatusCodes.Success,
	data: "some string", 
	tyep: "GET"
}