/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransformTransformationTokenizationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies a list of allowed roles that this transformation can be assigned to. A role using this transformation must exist in this list in order for encode and decode operations to properly function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#allowed_roles TransformTransformationTokenization#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Specifies whether to use convergent tokenization, where tokenization of the same plaintext more than once results in the same token. Defaults to false as unique tokens are more desirable from a security standpoint if there isn't a use-case need for convergence. This property cannot be changed after the transform is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#convergent TransformTransformationTokenization#convergent}
  */
  readonly convergent?: boolean | cdktn.IResolvable;
  /**
  * If true, this transform can be deleted. Otherwise deletion is blocked while this value remains false. Note that deleting the transform deletes the underlying key making decoding of tokenized values impossible without restoring from a backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#deletion_allowed TransformTransformationTokenization#deletion_allowed}
  */
  readonly deletionAllowed?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#id TransformTransformationTokenization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the mapping mode for stored tokenization values. default is strongly recommended for highest security. exportable allows for all plaintexts to be decoded via the export-decoded endpoint in an emergency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#mapping_mode TransformTransformationTokenization#mapping_mode}
  */
  readonly mappingMode?: string;
  /**
  * The maximum TTL of a token. If 0 or unspecified, tokens may have no expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#max_ttl TransformTransformationTokenization#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * The name of the transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#name TransformTransformationTokenization#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#namespace TransformTransformationTokenization#namespace}
  */
  readonly namespace?: string;
  /**
  * The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#path TransformTransformationTokenization#path}
  */
  readonly path: string;
  /**
  * The list of tokenization stores to use for tokenization state. Vault's internal storage is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#stores TransformTransformationTokenization#stores}
  */
  readonly stores?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization vault_transform_transformation_tokenization}
*/
export class TransformTransformationTokenization extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_transformation_tokenization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransformTransformationTokenization resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransformTransformationTokenization to import
  * @param importFromId The id of the existing TransformTransformationTokenization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransformTransformationTokenization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_transform_transformation_tokenization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization vault_transform_transformation_tokenization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformTransformationTokenizationConfig
  */
  public constructor(scope: Construct, id: string, config: TransformTransformationTokenizationConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_transformation_tokenization',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.12.0',
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
    this._allowedRoles = config.allowedRoles;
    this._convergent = config.convergent;
    this._deletionAllowed = config.deletionAllowed;
    this._id = config.id;
    this._mappingMode = config.mappingMode;
    this._maxTtl = config.maxTtl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._stores = config.stores;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
  }

  // convergent - computed: false, optional: true, required: false
  private _convergent?: boolean | cdktn.IResolvable; 
  public get convergent() {
    return this.getBooleanAttribute('convergent');
  }
  public set convergent(value: boolean | cdktn.IResolvable) {
    this._convergent = value;
  }
  public resetConvergent() {
    this._convergent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergentInput() {
    return this._convergent;
  }

  // deletion_allowed - computed: false, optional: true, required: false
  private _deletionAllowed?: boolean | cdktn.IResolvable; 
  public get deletionAllowed() {
    return this.getBooleanAttribute('deletion_allowed');
  }
  public set deletionAllowed(value: boolean | cdktn.IResolvable) {
    this._deletionAllowed = value;
  }
  public resetDeletionAllowed() {
    this._deletionAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionAllowedInput() {
    return this._deletionAllowed;
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

  // mapping_mode - computed: true, optional: true, required: false
  private _mappingMode?: string; 
  public get mappingMode() {
    return this.getStringAttribute('mapping_mode');
  }
  public set mappingMode(value: string) {
    this._mappingMode = value;
  }
  public resetMappingMode() {
    this._mappingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingModeInput() {
    return this._mappingMode;
  }

  // max_ttl - computed: true, optional: true, required: false
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // stores - computed: true, optional: true, required: false
  private _stores?: string[]; 
  public get stores() {
    return this.getListAttribute('stores');
  }
  public set stores(value: string[]) {
    this._stores = value;
  }
  public resetStores() {
    this._stores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storesInput() {
    return this._stores;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedRoles),
      convergent: cdktn.booleanToTerraform(this._convergent),
      deletion_allowed: cdktn.booleanToTerraform(this._deletionAllowed),
      id: cdktn.stringToTerraform(this._id),
      mapping_mode: cdktn.stringToTerraform(this._mappingMode),
      max_ttl: cdktn.numberToTerraform(this._maxTtl),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      path: cdktn.stringToTerraform(this._path),
      stores: cdktn.listMapper(cdktn.stringToTerraform, false)(this._stores),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_roles: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      convergent: {
        value: cdktn.booleanToHclTerraform(this._convergent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_allowed: {
        value: cdktn.booleanToHclTerraform(this._deletionAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapping_mode: {
        value: cdktn.stringToHclTerraform(this._mappingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ttl: {
        value: cdktn.numberToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stores: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._stores),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
