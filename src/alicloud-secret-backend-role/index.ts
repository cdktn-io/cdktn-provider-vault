/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AlicloudSecretBackendRoleConfig extends cdktn.TerraformMetaArguments {
  /**
  * The maximum allowed lifetime of credentials issued using this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#max_ttl AlicloudSecretBackendRole#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Path of the AliCloud Secret Backend the role belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#mount AlicloudSecretBackendRole#mount}
  */
  readonly mount: string;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#namespace AlicloudSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * ARN of the RAM role to assume. If provided, inline_policies and remote_policies should be blank. The trusted principal of the role must be configured to allow assumption by the access key and secret configured in the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#role_arn AlicloudSecretBackendRole#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Duration in seconds after which the issued credentials should expire. Defaults to 0, in which case the value will fallback to the system/mount defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#ttl AlicloudSecretBackendRole#ttl}
  */
  readonly ttl?: number;
  /**
  * inline_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#inline_policies AlicloudSecretBackendRole#inline_policies}
  */
  readonly inlinePolicies?: AlicloudSecretBackendRoleInlinePolicies[] | cdktn.IResolvable;
  /**
  * remote_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#remote_policies AlicloudSecretBackendRole#remote_policies}
  */
  readonly remotePolicies?: AlicloudSecretBackendRoleRemotePolicies[] | cdktn.IResolvable;
}
export interface AlicloudSecretBackendRoleInlinePolicies {
  /**
  * JSON-encoded inline policy document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#policy_document AlicloudSecretBackendRole#policy_document}
  */
  readonly policyDocument: string;
}

export function alicloudSecretBackendRoleInlinePoliciesToTerraform(struct?: AlicloudSecretBackendRoleInlinePolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_document: cdktn.stringToTerraform(struct!.policyDocument),
  }
}


export function alicloudSecretBackendRoleInlinePoliciesToHclTerraform(struct?: AlicloudSecretBackendRoleInlinePolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_document: {
      value: cdktn.stringToHclTerraform(struct!.policyDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlicloudSecretBackendRoleInlinePoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlicloudSecretBackendRoleInlinePolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDocument = this._policyDocument;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlicloudSecretBackendRoleInlinePolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyDocument = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyDocument = value.policyDocument;
    }
  }

  // policy_document - computed: false, optional: false, required: true
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }
}

export class AlicloudSecretBackendRoleInlinePoliciesList extends cdktn.ComplexList {
  public internalValue? : AlicloudSecretBackendRoleInlinePolicies[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AlicloudSecretBackendRoleInlinePoliciesOutputReference {
    return new AlicloudSecretBackendRoleInlinePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlicloudSecretBackendRoleRemotePolicies {
  /**
  * Name of the remote policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * Type of the remote policy (System or Custom).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#type AlicloudSecretBackendRole#type}
  */
  readonly type: string;
}

export function alicloudSecretBackendRoleRemotePoliciesToTerraform(struct?: AlicloudSecretBackendRoleRemotePolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function alicloudSecretBackendRoleRemotePoliciesToHclTerraform(struct?: AlicloudSecretBackendRoleRemotePolicies | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlicloudSecretBackendRoleRemotePoliciesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): AlicloudSecretBackendRoleRemotePolicies | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlicloudSecretBackendRoleRemotePolicies | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class AlicloudSecretBackendRoleRemotePoliciesList extends cdktn.ComplexList {
  public internalValue? : AlicloudSecretBackendRoleRemotePolicies[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AlicloudSecretBackendRoleRemotePoliciesOutputReference {
    return new AlicloudSecretBackendRoleRemotePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role vault_alicloud_secret_backend_role}
*/
export class AlicloudSecretBackendRole extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_alicloud_secret_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlicloudSecretBackendRole to import
  * @param importFromId The id of the existing AlicloudSecretBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlicloudSecretBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_alicloud_secret_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/alicloud_secret_backend_role vault_alicloud_secret_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlicloudSecretBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AlicloudSecretBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_alicloud_secret_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.9.0',
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
    this._maxTtl = config.maxTtl;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._roleArn = config.roleArn;
    this._ttl = config.ttl;
    this._inlinePolicies.internalValue = config.inlinePolicies;
    this._remotePolicies.internalValue = config.remotePolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // inline_policies - computed: false, optional: true, required: false
  private _inlinePolicies = new AlicloudSecretBackendRoleInlinePoliciesList(this, "inline_policies", true);
  public get inlinePolicies() {
    return this._inlinePolicies;
  }
  public putInlinePolicies(value: AlicloudSecretBackendRoleInlinePolicies[] | cdktn.IResolvable) {
    this._inlinePolicies.internalValue = value;
  }
  public resetInlinePolicies() {
    this._inlinePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePoliciesInput() {
    return this._inlinePolicies.internalValue;
  }

  // remote_policies - computed: false, optional: true, required: false
  private _remotePolicies = new AlicloudSecretBackendRoleRemotePoliciesList(this, "remote_policies", true);
  public get remotePolicies() {
    return this._remotePolicies;
  }
  public putRemotePolicies(value: AlicloudSecretBackendRoleRemotePolicies[] | cdktn.IResolvable) {
    this._remotePolicies.internalValue = value;
  }
  public resetRemotePolicies() {
    this._remotePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePoliciesInput() {
    return this._remotePolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      max_ttl: cdktn.numberToTerraform(this._maxTtl),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      role_arn: cdktn.stringToTerraform(this._roleArn),
      ttl: cdktn.numberToTerraform(this._ttl),
      inline_policies: cdktn.listMapper(alicloudSecretBackendRoleInlinePoliciesToTerraform, true)(this._inlinePolicies.internalValue),
      remote_policies: cdktn.listMapper(alicloudSecretBackendRoleRemotePoliciesToTerraform, true)(this._remotePolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      max_ttl: {
        value: cdktn.numberToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
      role_arn: {
        value: cdktn.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktn.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inline_policies: {
        value: cdktn.listMapperHcl(alicloudSecretBackendRoleInlinePoliciesToHclTerraform, true)(this._inlinePolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlicloudSecretBackendRoleInlinePoliciesList",
      },
      remote_policies: {
        value: cdktn.listMapperHcl(alicloudSecretBackendRoleRemotePoliciesToHclTerraform, true)(this._remotePolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlicloudSecretBackendRoleRemotePoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
