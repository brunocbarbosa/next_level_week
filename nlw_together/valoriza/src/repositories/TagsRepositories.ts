import { Repository } from "typeorm";
import { Tag } from '../entities/Tags'

class TagsRepositories extends Repository<Tag>{}

export {TagsRepositories}