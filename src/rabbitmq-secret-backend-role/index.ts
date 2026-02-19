/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface RabbitmqSecretBackendRoleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The path of the Rabbitmq Secret Backend the role belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#backend RabbitmqSecretBackendRole#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#name RabbitmqSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#namespace RabbitmqSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies a comma-separated RabbitMQ management tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#tags RabbitmqSecretBackendRole#tags}
  */
  readonly tags?: string;
  /**
  * vhost block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}
  */
  readonly vhost?: RabbitmqSecretBackendRoleVhost[] | cdktn.IResolvable;
  /**
  * vhost_topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#vhost_topic RabbitmqSecretBackendRole#vhost_topic}
  */
  readonly vhostTopic?: RabbitmqSecretBackendRoleVhostTopic[] | cdktn.IResolvable;
}
export interface RabbitmqSecretBackendRoleVhost {
  /**
  * The configure permissions for this vhost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#configure RabbitmqSecretBackendRole#configure}
  */
  readonly configure: string;
  /**
  * The vhost to set permissions for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}
  */
  readonly host: string;
  /**
  * The read permissions for this vhost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}
  */
  readonly read: string;
  /**
  * The write permissions for this vhost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}
  */
  readonly write: string;
}

export function rabbitmqSecretBackendRoleVhostToTerraform(struct?: RabbitmqSecretBackendRoleVhost | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configure: cdktn.stringToTerraform(struct!.configure),
    host: cdktn.stringToTerraform(struct!.host),
    read: cdktn.stringToTerraform(struct!.read),
    write: cdktn.stringToTerraform(struct!.write),
  }
}


export function rabbitmqSecretBackendRoleVhostToHclTerraform(struct?: RabbitmqSecretBackendRoleVhost | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configure: {
      value: cdktn.stringToHclTerraform(struct!.configure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write: {
      value: cdktn.stringToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RabbitmqSecretBackendRoleVhostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RabbitmqSecretBackendRoleVhost | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configure !== undefined) {
      hasAnyValues = true;
      internalValueResult.configure = this._configure;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RabbitmqSecretBackendRoleVhost | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configure = undefined;
      this._host = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configure = value.configure;
      this._host = value.host;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // configure - computed: false, optional: false, required: true
  private _configure?: string; 
  public get configure() {
    return this.getStringAttribute('configure');
  }
  public set configure(value: string) {
    this._configure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configureInput() {
    return this._configure;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // read - computed: false, optional: false, required: true
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: false, optional: false, required: true
  private _write?: string; 
  public get write() {
    return this.getStringAttribute('write');
  }
  public set write(value: string) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}

export class RabbitmqSecretBackendRoleVhostList extends cdktn.ComplexList {
  public internalValue? : RabbitmqSecretBackendRoleVhost[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RabbitmqSecretBackendRoleVhostOutputReference {
    return new RabbitmqSecretBackendRoleVhostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RabbitmqSecretBackendRoleVhostTopicVhost {
  /**
  * The read permissions for this vhost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}
  */
  readonly read: string;
  /**
  * The vhost to set permissions for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#topic RabbitmqSecretBackendRole#topic}
  */
  readonly topic: string;
  /**
  * The write permissions for this vhost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}
  */
  readonly write: string;
}

export function rabbitmqSecretBackendRoleVhostTopicVhostToTerraform(struct?: RabbitmqSecretBackendRoleVhostTopicVhost | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktn.stringToTerraform(struct!.read),
    topic: cdktn.stringToTerraform(struct!.topic),
    write: cdktn.stringToTerraform(struct!.write),
  }
}


export function rabbitmqSecretBackendRoleVhostTopicVhostToHclTerraform(struct?: RabbitmqSecretBackendRoleVhostTopicVhost | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktn.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write: {
      value: cdktn.stringToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RabbitmqSecretBackendRoleVhostTopicVhostOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RabbitmqSecretBackendRoleVhostTopicVhost | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RabbitmqSecretBackendRoleVhostTopicVhost | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
      this._topic = undefined;
      this._write = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
      this._topic = value.topic;
      this._write = value.write;
    }
  }

  // read - computed: false, optional: false, required: true
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // write - computed: false, optional: false, required: true
  private _write?: string; 
  public get write() {
    return this.getStringAttribute('write');
  }
  public set write(value: string) {
    this._write = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}

export class RabbitmqSecretBackendRoleVhostTopicVhostList extends cdktn.ComplexList {
  public internalValue? : RabbitmqSecretBackendRoleVhostTopicVhost[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RabbitmqSecretBackendRoleVhostTopicVhostOutputReference {
    return new RabbitmqSecretBackendRoleVhostTopicVhostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RabbitmqSecretBackendRoleVhostTopic {
  /**
  * The vhost to set permissions for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}
  */
  readonly host: string;
  /**
  * vhost block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}
  */
  readonly vhost?: RabbitmqSecretBackendRoleVhostTopicVhost[] | cdktn.IResolvable;
}

export function rabbitmqSecretBackendRoleVhostTopicToTerraform(struct?: RabbitmqSecretBackendRoleVhostTopic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    vhost: cdktn.listMapper(rabbitmqSecretBackendRoleVhostTopicVhostToTerraform, true)(struct!.vhost),
  }
}


export function rabbitmqSecretBackendRoleVhostTopicToHclTerraform(struct?: RabbitmqSecretBackendRoleVhostTopic | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vhost: {
      value: cdktn.listMapperHcl(rabbitmqSecretBackendRoleVhostTopicVhostToHclTerraform, true)(struct!.vhost),
      isBlock: true,
      type: "list",
      storageClassType: "RabbitmqSecretBackendRoleVhostTopicVhostList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RabbitmqSecretBackendRoleVhostTopicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RabbitmqSecretBackendRoleVhostTopic | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._vhost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhost = this._vhost?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RabbitmqSecretBackendRoleVhostTopic | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._vhost.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._vhost.internalValue = value.vhost;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // vhost - computed: false, optional: true, required: false
  private _vhost = new RabbitmqSecretBackendRoleVhostTopicVhostList(this, "vhost", false);
  public get vhost() {
    return this._vhost;
  }
  public putVhost(value: RabbitmqSecretBackendRoleVhostTopicVhost[] | cdktn.IResolvable) {
    this._vhost.internalValue = value;
  }
  public resetVhost() {
    this._vhost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost.internalValue;
  }
}

export class RabbitmqSecretBackendRoleVhostTopicList extends cdktn.ComplexList {
  public internalValue? : RabbitmqSecretBackendRoleVhostTopic[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RabbitmqSecretBackendRoleVhostTopicOutputReference {
    return new RabbitmqSecretBackendRoleVhostTopicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role vault_rabbitmq_secret_backend_role}
*/
export class RabbitmqSecretBackendRole extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_rabbitmq_secret_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a RabbitmqSecretBackendRole resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RabbitmqSecretBackendRole to import
  * @param importFromId The id of the existing RabbitmqSecretBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RabbitmqSecretBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_rabbitmq_secret_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/rabbitmq_secret_backend_role vault_rabbitmq_secret_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RabbitmqSecretBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: RabbitmqSecretBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_rabbitmq_secret_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.7.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backend = config.backend;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._tags = config.tags;
    this._vhost.internalValue = config.vhost;
    this._vhostTopic.internalValue = config.vhostTopic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vhost - computed: false, optional: true, required: false
  private _vhost = new RabbitmqSecretBackendRoleVhostList(this, "vhost", false);
  public get vhost() {
    return this._vhost;
  }
  public putVhost(value: RabbitmqSecretBackendRoleVhost[] | cdktn.IResolvable) {
    this._vhost.internalValue = value;
  }
  public resetVhost() {
    this._vhost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostInput() {
    return this._vhost.internalValue;
  }

  // vhost_topic - computed: false, optional: true, required: false
  private _vhostTopic = new RabbitmqSecretBackendRoleVhostTopicList(this, "vhost_topic", false);
  public get vhostTopic() {
    return this._vhostTopic;
  }
  public putVhostTopic(value: RabbitmqSecretBackendRoleVhostTopic[] | cdktn.IResolvable) {
    this._vhostTopic.internalValue = value;
  }
  public resetVhostTopic() {
    this._vhostTopic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhostTopicInput() {
    return this._vhostTopic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktn.stringToTerraform(this._backend),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      tags: cdktn.stringToTerraform(this._tags),
      vhost: cdktn.listMapper(rabbitmqSecretBackendRoleVhostToTerraform, true)(this._vhost.internalValue),
      vhost_topic: cdktn.listMapper(rabbitmqSecretBackendRoleVhostTopicToTerraform, true)(this._vhostTopic.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktn.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktn.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vhost: {
        value: cdktn.listMapperHcl(rabbitmqSecretBackendRoleVhostToHclTerraform, true)(this._vhost.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RabbitmqSecretBackendRoleVhostList",
      },
      vhost_topic: {
        value: cdktn.listMapperHcl(rabbitmqSecretBackendRoleVhostTopicToHclTerraform, true)(this._vhostTopic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RabbitmqSecretBackendRoleVhostTopicList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
