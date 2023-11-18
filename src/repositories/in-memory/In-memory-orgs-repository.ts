import { Org, Prisma } from "@prisma/client";
import { OrgsRepository } from "../orgs-repository";

export class InMemoryOrgsRepository implements OrgsRepository {

    public items: Org[] = []

    async create(data: Prisma.OrgCreateInput) {
        const org = {
            id: "org1",
            responsible_name: data.responsible_name,
            description: data.description,
            email: data.email,
            password_hash: data.password_hash,
            created_at: data.created_at,
            code_postal: data.code_postal,
            address: data.address,
            number_whatsapp: data.number_whatsapp,
            user_id: data.user,
            pet_id: data.pet,
        }
        this.items.push(org)
        return org
    }

   /* async create(data: Prisma.OrgCreateInput) {
        const org = {
            id: "org1",
            responsible_name: data.responsible_name,
        }

        this.items.push(org)

        return org
    }
    */

}