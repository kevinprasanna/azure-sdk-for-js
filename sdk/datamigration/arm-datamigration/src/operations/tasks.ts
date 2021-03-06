/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/tasksMappers";
import * as Parameters from "../models/parameters";
import { DataMigrationServiceClientContext } from "../dataMigrationServiceClientContext";

/** Class representing a Tasks. */
export class Tasks {
  private readonly client: DataMigrationServiceClientContext;

  /**
   * Create a Tasks.
   * @param {DataMigrationServiceClientContext} client Reference to the service client.
   */
  constructor(client: DataMigrationServiceClientContext) {
    this.client = client;
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service.
   * This method returns a list of tasks owned by a service resource. Some tasks may have a status of
   * Unknown, which indicates that an error occurred while querying the status of that task.
   * @summary Get tasks in a service
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param [options] The optional parameters
   * @returns Promise<Models.TasksListResponse>
   */
  list(groupName: string, serviceName: string, projectName: string, options?: Models.TasksListOptionalParams): Promise<Models.TasksListResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param callback The callback
   */
  list(groupName: string, serviceName: string, projectName: string, callback: msRest.ServiceCallback<Models.TaskList>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The optional parameters
   * @param callback The callback
   */
  list(groupName: string, serviceName: string, projectName: string, options: Models.TasksListOptionalParams, callback: msRest.ServiceCallback<Models.TaskList>): void;
  list(groupName: string, serviceName: string, projectName: string, options?: Models.TasksListOptionalParams | msRest.ServiceCallback<Models.TaskList>, callback?: msRest.ServiceCallback<Models.TaskList>): Promise<Models.TasksListResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.TasksListResponse>;
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. The PUT method creates a new task or updates an existing one, although since tasks
   * have no mutable custom properties, there is little reason to update an existing one.
   * @summary Create or update task
   * @param parameters Information about the task
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param [options] The optional parameters
   * @returns Promise<Models.TasksCreateOrUpdateResponse>
   */
  createOrUpdate(parameters: Models.ProjectTask, groupName: string, serviceName: string, projectName: string, taskName: string, options?: msRest.RequestOptionsBase): Promise<Models.TasksCreateOrUpdateResponse>;
  /**
   * @param parameters Information about the task
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param callback The callback
   */
  createOrUpdate(parameters: Models.ProjectTask, groupName: string, serviceName: string, projectName: string, taskName: string, callback: msRest.ServiceCallback<Models.ProjectTask>): void;
  /**
   * @param parameters Information about the task
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(parameters: Models.ProjectTask, groupName: string, serviceName: string, projectName: string, taskName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectTask>): void;
  createOrUpdate(parameters: Models.ProjectTask, groupName: string, serviceName: string, projectName: string, taskName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectTask>, callback?: msRest.ServiceCallback<Models.ProjectTask>): Promise<Models.TasksCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        groupName,
        serviceName,
        projectName,
        taskName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.TasksCreateOrUpdateResponse>;
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. The GET method retrieves information about a task.
   * @summary Get task information
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param [options] The optional parameters
   * @returns Promise<Models.TasksGetResponse>
   */
  get(groupName: string, serviceName: string, projectName: string, taskName: string, options?: Models.TasksGetOptionalParams): Promise<Models.TasksGetResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param callback The callback
   */
  get(groupName: string, serviceName: string, projectName: string, taskName: string, callback: msRest.ServiceCallback<Models.ProjectTask>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param options The optional parameters
   * @param callback The callback
   */
  get(groupName: string, serviceName: string, projectName: string, taskName: string, options: Models.TasksGetOptionalParams, callback: msRest.ServiceCallback<Models.ProjectTask>): void;
  get(groupName: string, serviceName: string, projectName: string, taskName: string, options?: Models.TasksGetOptionalParams | msRest.ServiceCallback<Models.ProjectTask>, callback?: msRest.ServiceCallback<Models.ProjectTask>): Promise<Models.TasksGetResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        taskName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TasksGetResponse>;
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. The DELETE method deletes a task, canceling it first if it's running.
   * @summary Delete task
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(groupName: string, serviceName: string, projectName: string, taskName: string, options?: Models.TasksDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param callback The callback
   */
  deleteMethod(groupName: string, serviceName: string, projectName: string, taskName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(groupName: string, serviceName: string, projectName: string, taskName: string, options: Models.TasksDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(groupName: string, serviceName: string, projectName: string, taskName: string, options?: Models.TasksDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        taskName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. The PATCH method updates an existing task, but since tasks have no mutable custom
   * properties, there is little reason to do so.
   * @summary Create or update task
   * @param parameters Information about the task
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param [options] The optional parameters
   * @returns Promise<Models.TasksUpdateResponse>
   */
  update(parameters: Models.ProjectTask, groupName: string, serviceName: string, projectName: string, taskName: string, options?: msRest.RequestOptionsBase): Promise<Models.TasksUpdateResponse>;
  /**
   * @param parameters Information about the task
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param callback The callback
   */
  update(parameters: Models.ProjectTask, groupName: string, serviceName: string, projectName: string, taskName: string, callback: msRest.ServiceCallback<Models.ProjectTask>): void;
  /**
   * @param parameters Information about the task
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param options The optional parameters
   * @param callback The callback
   */
  update(parameters: Models.ProjectTask, groupName: string, serviceName: string, projectName: string, taskName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectTask>): void;
  update(parameters: Models.ProjectTask, groupName: string, serviceName: string, projectName: string, taskName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectTask>, callback?: msRest.ServiceCallback<Models.ProjectTask>): Promise<Models.TasksUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        groupName,
        serviceName,
        projectName,
        taskName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.TasksUpdateResponse>;
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. This method cancels a task if it's currently queued or running.
   * @summary Cancel a task
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param [options] The optional parameters
   * @returns Promise<Models.TasksCancelResponse>
   */
  cancel(groupName: string, serviceName: string, projectName: string, taskName: string, options?: msRest.RequestOptionsBase): Promise<Models.TasksCancelResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param callback The callback
   */
  cancel(groupName: string, serviceName: string, projectName: string, taskName: string, callback: msRest.ServiceCallback<Models.ProjectTask>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param options The optional parameters
   * @param callback The callback
   */
  cancel(groupName: string, serviceName: string, projectName: string, taskName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProjectTask>): void;
  cancel(groupName: string, serviceName: string, projectName: string, taskName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProjectTask>, callback?: msRest.ServiceCallback<Models.ProjectTask>): Promise<Models.TasksCancelResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        taskName,
        options
      },
      cancelOperationSpec,
      callback) as Promise<Models.TasksCancelResponse>;
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS
   * instance. This method executes a command on a running task.
   * @summary Execute a command on a task
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param parameters Command to execute
   * @param [options] The optional parameters
   * @returns Promise<Models.TasksCommandResponse>
   */
  command(groupName: string, serviceName: string, projectName: string, taskName: string, parameters: Models.CommandPropertiesUnion, options?: msRest.RequestOptionsBase): Promise<Models.TasksCommandResponse>;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param parameters Command to execute
   * @param callback The callback
   */
  command(groupName: string, serviceName: string, projectName: string, taskName: string, parameters: Models.CommandPropertiesUnion, callback: msRest.ServiceCallback<Models.CommandPropertiesUnion>): void;
  /**
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param parameters Command to execute
   * @param options The optional parameters
   * @param callback The callback
   */
  command(groupName: string, serviceName: string, projectName: string, taskName: string, parameters: Models.CommandPropertiesUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CommandPropertiesUnion>): void;
  command(groupName: string, serviceName: string, projectName: string, taskName: string, parameters: Models.CommandPropertiesUnion, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CommandPropertiesUnion>, callback?: msRest.ServiceCallback<Models.CommandPropertiesUnion>): Promise<Models.TasksCommandResponse> {
    return this.client.sendOperationRequest(
      {
        groupName,
        serviceName,
        projectName,
        taskName,
        parameters,
        options
      },
      commandOperationSpec,
      callback) as Promise<Models.TasksCommandResponse>;
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service.
   * This method returns a list of tasks owned by a service resource. Some tasks may have a status of
   * Unknown, which indicates that an error occurred while querying the status of that task.
   * @summary Get tasks in a service
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TasksListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TasksListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TaskList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TaskList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TaskList>, callback?: msRest.ServiceCallback<Models.TaskList>): Promise<Models.TasksListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.TasksListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.taskType
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TaskList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ProjectTask,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ProjectTask
    },
    201: {
      bodyMapper: Mappers.ProjectTask
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProjectTask
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  queryParameters: [
    Parameters.deleteRunningTasks,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ProjectTask,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ProjectTask
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const cancelOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}/cancel",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProjectTask
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const commandOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}/command",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CommandProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CommandProperties
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TaskList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};
