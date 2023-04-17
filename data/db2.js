export const usuarios = [
	{ nombre: 'Juan', edad: 25, Email: 'juan@example.com' },
	{ nombre: 'Ana', edad: 30, Email: 'ana@example.com' },
	{ nombre: 'Pedro', edad: 28, Email: 'pedro@example.com' },
	{ nombre: 'María', edad: 33, Email: 'maria@example.com' },
	{ nombre: 'Luis', edad: 21, Email: 'luis@example.com' },
];

export const findUserByEmail = (email) => usuarios.find(u => u.Email == email)
// crear funcion flecha findUserByEmail(email), la misma tiene que devolver un usuario
