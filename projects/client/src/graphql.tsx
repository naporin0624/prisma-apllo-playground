import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccountNumber: any;
  BigInt: any;
  Byte: any;
  CountryCode: any;
  Currency: any;
  DID: any;
  Date: any;
  DateTime: Date;
  Duration: any;
  EmailAddress: any;
  GUID: any;
  HSL: any;
  HSLA: any;
  HexColorCode: any;
  Hexadecimal: any;
  IBAN: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  ISO8601Duration: any;
  JSON: any;
  JSONObject: any;
  JWT: any;
  Latitude: any;
  LocalDate: any;
  LocalEndTime: any;
  LocalTime: any;
  Locale: any;
  Long: any;
  Longitude: any;
  MAC: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  ObjectID: any;
  PhoneNumber: any;
  Port: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  RGB: any;
  RGBA: any;
  RoutingNumber: any;
  SafeInt: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  URL: any;
  USCurrency: any;
  UUID: any;
  UnsignedFloat: any;
  UnsignedInt: any;
  UtcOffset: any;
  Void: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateTodo = {
  __typename?: 'AggregateTodo';
  _avg?: Maybe<TodoAvgAggregate>;
  _count?: Maybe<TodoCountAggregate>;
  _max?: Maybe<TodoMaxAggregate>;
  _min?: Maybe<TodoMinAggregate>;
  _sum?: Maybe<TodoSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyTodo: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneTodo: Todo;
  createOneUser: User;
  deleteManyTodo: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneTodo?: Maybe<Todo>;
  deleteOneUser?: Maybe<User>;
  updateManyTodo: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneTodo?: Maybe<Todo>;
  updateOneUser?: Maybe<User>;
  upsertOneTodo: Todo;
  upsertOneUser: User;
};


export type MutationCreateManyTodoArgs = {
  data: Array<TodoCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneTodoArgs = {
  data: TodoCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyTodoArgs = {
  where?: InputMaybe<TodoWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneTodoArgs = {
  where: TodoWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyTodoArgs = {
  data: TodoUpdateManyMutationInput;
  where?: InputMaybe<TodoWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateOneTodoArgs = {
  data: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneTodoArgs = {
  create: TodoCreateInput;
  update: TodoUpdateInput;
  where: TodoWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateTodo: AggregateTodo;
  aggregateUser: AggregateUser;
  findFirstTodo?: Maybe<Todo>;
  findFirstUser?: Maybe<User>;
  groupByTodo: Array<TodoGroupBy>;
  groupByUser: Array<UserGroupBy>;
  todo?: Maybe<Todo>;
  todos: Array<Todo>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateTodoArgs = {
  cursor?: InputMaybe<TodoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TodoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstTodoArgs = {
  cursor?: InputMaybe<TodoWhereUniqueInput>;
  distinct?: InputMaybe<Array<TodoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TodoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByTodoArgs = {
  by: Array<TodoScalarFieldEnum>;
  having?: InputMaybe<TodoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TodoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryTodoArgs = {
  where: TodoWhereUniqueInput;
};


export type QueryTodosArgs = {
  cursor?: InputMaybe<TodoWhereUniqueInput>;
  distinct?: InputMaybe<Array<TodoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TodoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Todo = {
  __typename?: 'Todo';
  assgin?: Maybe<User>;
  assignById?: Maybe<Scalars['Int']>;
  author: User;
  authorId: Scalars['Int'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expiredAt: Scalars['DateTime'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TodoAvgAggregate = {
  __typename?: 'TodoAvgAggregate';
  assignById?: Maybe<Scalars['Float']>;
  authorId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type TodoAvgOrderByAggregateInput = {
  assignById?: InputMaybe<SortOrder>;
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TodoCountAggregate = {
  __typename?: 'TodoCountAggregate';
  _all: Scalars['Int'];
  assignById: Scalars['Int'];
  authorId: Scalars['Int'];
  body: Scalars['Int'];
  createdAt: Scalars['Int'];
  expiredAt: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TodoCountOrderByAggregateInput = {
  assignById?: InputMaybe<SortOrder>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TodoCreateInput = {
  assgin?: InputMaybe<UserCreateNestedOneWithoutAssginTodosInput>;
  author: UserCreateNestedOneWithoutCreatedTodosInput;
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoCreateManyAssginInput = {
  authorId: Scalars['Int'];
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoCreateManyAssginInputEnvelope = {
  data: Array<TodoCreateManyAssginInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TodoCreateManyAuthorInput = {
  assignById?: InputMaybe<Scalars['Int']>;
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoCreateManyAuthorInputEnvelope = {
  data: Array<TodoCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TodoCreateManyInput = {
  assignById?: InputMaybe<Scalars['Int']>;
  authorId: Scalars['Int'];
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoCreateNestedManyWithoutAssginInput = {
  connect?: InputMaybe<Array<TodoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoCreateOrConnectWithoutAssginInput>>;
  create?: InputMaybe<Array<TodoCreateWithoutAssginInput>>;
  createMany?: InputMaybe<TodoCreateManyAssginInputEnvelope>;
};

export type TodoCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<TodoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<TodoCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<TodoCreateManyAuthorInputEnvelope>;
};

export type TodoCreateOrConnectWithoutAssginInput = {
  create: TodoCreateWithoutAssginInput;
  where: TodoWhereUniqueInput;
};

export type TodoCreateOrConnectWithoutAuthorInput = {
  create: TodoCreateWithoutAuthorInput;
  where: TodoWhereUniqueInput;
};

export type TodoCreateWithoutAssginInput = {
  author: UserCreateNestedOneWithoutCreatedTodosInput;
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoCreateWithoutAuthorInput = {
  assgin?: InputMaybe<UserCreateNestedOneWithoutAssginTodosInput>;
  body: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  expiredAt: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TodoGroupBy = {
  __typename?: 'TodoGroupBy';
  _avg?: Maybe<TodoAvgAggregate>;
  _count?: Maybe<TodoCountAggregate>;
  _max?: Maybe<TodoMaxAggregate>;
  _min?: Maybe<TodoMinAggregate>;
  _sum?: Maybe<TodoSumAggregate>;
  assignById?: Maybe<Scalars['Int']>;
  authorId: Scalars['Int'];
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expiredAt: Scalars['DateTime'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TodoListRelationFilter = {
  every?: InputMaybe<TodoWhereInput>;
  none?: InputMaybe<TodoWhereInput>;
  some?: InputMaybe<TodoWhereInput>;
};

export type TodoMaxAggregate = {
  __typename?: 'TodoMaxAggregate';
  assignById?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TodoMaxOrderByAggregateInput = {
  assignById?: InputMaybe<SortOrder>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TodoMinAggregate = {
  __typename?: 'TodoMinAggregate';
  assignById?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  expiredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TodoMinOrderByAggregateInput = {
  assignById?: InputMaybe<SortOrder>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TodoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TodoOrderByWithAggregationInput = {
  _avg?: InputMaybe<TodoAvgOrderByAggregateInput>;
  _count?: InputMaybe<TodoCountOrderByAggregateInput>;
  _max?: InputMaybe<TodoMaxOrderByAggregateInput>;
  _min?: InputMaybe<TodoMinOrderByAggregateInput>;
  _sum?: InputMaybe<TodoSumOrderByAggregateInput>;
  assignById?: InputMaybe<SortOrder>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TodoOrderByWithRelationInput = {
  assgin?: InputMaybe<UserOrderByWithRelationInput>;
  assignById?: InputMaybe<SortOrder>;
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum TodoScalarFieldEnum {
  AssignById = 'assignById',
  AuthorId = 'authorId',
  Body = 'body',
  CreatedAt = 'createdAt',
  ExpiredAt = 'expiredAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type TodoScalarWhereInput = {
  AND?: InputMaybe<Array<TodoScalarWhereInput>>;
  NOT?: InputMaybe<Array<TodoScalarWhereInput>>;
  OR?: InputMaybe<Array<TodoScalarWhereInput>>;
  assignById?: InputMaybe<IntNullableFilter>;
  authorId?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TodoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TodoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TodoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TodoScalarWhereWithAggregatesInput>>;
  assignById?: InputMaybe<IntNullableWithAggregatesFilter>;
  authorId?: InputMaybe<IntWithAggregatesFilter>;
  body?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expiredAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type TodoSumAggregate = {
  __typename?: 'TodoSumAggregate';
  assignById?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type TodoSumOrderByAggregateInput = {
  assignById?: InputMaybe<SortOrder>;
  authorId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TodoUpdateInput = {
  assgin?: InputMaybe<UserUpdateOneWithoutAssginTodosNestedInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutCreatedTodosNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TodoUpdateManyMutationInput = {
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TodoUpdateManyWithWhereWithoutAssginInput = {
  data: TodoUpdateManyMutationInput;
  where: TodoScalarWhereInput;
};

export type TodoUpdateManyWithWhereWithoutAuthorInput = {
  data: TodoUpdateManyMutationInput;
  where: TodoScalarWhereInput;
};

export type TodoUpdateManyWithoutAssginNestedInput = {
  connect?: InputMaybe<Array<TodoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoCreateOrConnectWithoutAssginInput>>;
  create?: InputMaybe<Array<TodoCreateWithoutAssginInput>>;
  createMany?: InputMaybe<TodoCreateManyAssginInputEnvelope>;
  delete?: InputMaybe<Array<TodoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TodoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TodoWhereUniqueInput>>;
  set?: InputMaybe<Array<TodoWhereUniqueInput>>;
  update?: InputMaybe<Array<TodoUpdateWithWhereUniqueWithoutAssginInput>>;
  updateMany?: InputMaybe<Array<TodoUpdateManyWithWhereWithoutAssginInput>>;
  upsert?: InputMaybe<Array<TodoUpsertWithWhereUniqueWithoutAssginInput>>;
};

export type TodoUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<TodoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TodoCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<TodoCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<TodoCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<TodoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TodoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TodoWhereUniqueInput>>;
  set?: InputMaybe<Array<TodoWhereUniqueInput>>;
  update?: InputMaybe<Array<TodoUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<TodoUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<TodoUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type TodoUpdateWithWhereUniqueWithoutAssginInput = {
  data: TodoUpdateWithoutAssginInput;
  where: TodoWhereUniqueInput;
};

export type TodoUpdateWithWhereUniqueWithoutAuthorInput = {
  data: TodoUpdateWithoutAuthorInput;
  where: TodoWhereUniqueInput;
};

export type TodoUpdateWithoutAssginInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutCreatedTodosNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TodoUpdateWithoutAuthorInput = {
  assgin?: InputMaybe<UserUpdateOneWithoutAssginTodosNestedInput>;
  body?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expiredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TodoUpsertWithWhereUniqueWithoutAssginInput = {
  create: TodoCreateWithoutAssginInput;
  update: TodoUpdateWithoutAssginInput;
  where: TodoWhereUniqueInput;
};

export type TodoUpsertWithWhereUniqueWithoutAuthorInput = {
  create: TodoCreateWithoutAuthorInput;
  update: TodoUpdateWithoutAuthorInput;
  where: TodoWhereUniqueInput;
};

export type TodoWhereInput = {
  AND?: InputMaybe<Array<TodoWhereInput>>;
  NOT?: InputMaybe<Array<TodoWhereInput>>;
  OR?: InputMaybe<Array<TodoWhereInput>>;
  assgin?: InputMaybe<UserRelationFilter>;
  assignById?: InputMaybe<IntNullableFilter>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<IntFilter>;
  body?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TodoWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  assginTodos: Array<Todo>;
  createdAt: Scalars['DateTime'];
  createdTodos: Array<Todo>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type UserAssginTodosArgs = {
  cursor?: InputMaybe<TodoWhereUniqueInput>;
  distinct?: InputMaybe<Array<TodoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TodoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};


export type UserCreatedTodosArgs = {
  cursor?: InputMaybe<TodoWhereUniqueInput>;
  distinct?: InputMaybe<Array<TodoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TodoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TodoWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  assginTodos: Scalars['Int'];
  createdTodos: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  assginTodos?: InputMaybe<TodoCreateNestedManyWithoutAssginInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdTodos?: InputMaybe<TodoCreateNestedManyWithoutAuthorInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutAssginTodosInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssginTodosInput>;
  create?: InputMaybe<UserCreateWithoutAssginTodosInput>;
};

export type UserCreateNestedOneWithoutCreatedTodosInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedTodosInput>;
  create?: InputMaybe<UserCreateWithoutCreatedTodosInput>;
};

export type UserCreateOrConnectWithoutAssginTodosInput = {
  create: UserCreateWithoutAssginTodosInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedTodosInput = {
  create: UserCreateWithoutCreatedTodosInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAssginTodosInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdTodos?: InputMaybe<TodoCreateNestedManyWithoutAuthorInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutCreatedTodosInput = {
  assginTodos?: InputMaybe<TodoCreateNestedManyWithoutAssginInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  assginTodos?: InputMaybe<TodoOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdTodos?: InputMaybe<TodoOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  assginTodos?: InputMaybe<TodoUpdateManyWithoutAssginNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdTodos?: InputMaybe<TodoUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCreatedTodosNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedTodosInput>;
  create?: InputMaybe<UserCreateWithoutCreatedTodosInput>;
  update?: InputMaybe<UserUpdateWithoutCreatedTodosInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedTodosInput>;
};

export type UserUpdateOneWithoutAssginTodosNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssginTodosInput>;
  create?: InputMaybe<UserCreateWithoutAssginTodosInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutAssginTodosInput>;
  upsert?: InputMaybe<UserUpsertWithoutAssginTodosInput>;
};

export type UserUpdateWithoutAssginTodosInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdTodos?: InputMaybe<TodoUpdateManyWithoutAuthorNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedTodosInput = {
  assginTodos?: InputMaybe<TodoUpdateManyWithoutAssginNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAssginTodosInput = {
  create: UserCreateWithoutAssginTodosInput;
  update: UserUpdateWithoutAssginTodosInput;
};

export type UserUpsertWithoutCreatedTodosInput = {
  create: UserCreateWithoutCreatedTodosInput;
  update: UserUpdateWithoutCreatedTodosInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assginTodos?: InputMaybe<TodoListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdTodos?: InputMaybe<TodoListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};
