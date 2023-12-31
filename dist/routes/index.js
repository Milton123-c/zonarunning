"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("./user.router");
const service_router_1 = require("./service.router");
const professionals_router_1 = require("./professionals.router");
const avatar_router_1 = require("./avatar.router");
const client_router_1 = require("./client.router");
const cita_router_1 = require("./cita.router");
const disponibilidad_router_1 = require("./disponibilidad.router");
const globalRouter = (0, express_1.Router)();
//rutas
globalRouter.use('/professionals', professionals_router_1.routerProfessionals);
globalRouter.use('/clients', client_router_1.routerClients);
globalRouter.use("/users", user_router_1.routerUser);
globalRouter.use("/services", service_router_1.routerService);
globalRouter.use("/citas", cita_router_1.citaRouter);
globalRouter.use('/avatars', avatar_router_1.routerAvatar);
globalRouter.use('/availability', disponibilidad_router_1.routerDisponibilidad);
exports.default = globalRouter;
//# sourceMappingURL=index.js.map