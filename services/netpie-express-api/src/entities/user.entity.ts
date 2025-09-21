import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {
  @Column("varchar")
  email!: string;

  @PrimaryColumn("varchar")
  id!: string;

  @Column("varchar")
  name!: string;
}
