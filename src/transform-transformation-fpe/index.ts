/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransformTransformationFpeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Roles allowed to use this transformation. A role using this transformation must be in this list for encode and decode operations to work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#allowed_roles TransformTransformationFpe#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * If `true`, this transformation can be deleted. Otherwise deletion is blocked while this value is `false`. Deleting the transformation deletes the underlying key, making FPE-encoded values impossible to decode without restoring from a backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#deletion_allowed TransformTransformationFpe#deletion_allowed}
  */
  readonly deletionAllowed?: boolean | cdktn.IResolvable;
  /**
  * Maximum tweak size, in bytes, allowed for this transformation. Valid values are 0 to 32; 0 allows a tweak of any length. Vault does not allow this value to be changed after creation, so changing it fails at apply time. Requires Vault 2.2.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#max_tweak_len TransformTransformationFpe#max_tweak_len}
  */
  readonly maxTweakLen?: number;
  /**
  * Path where the Transform secrets engine is mounted. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#mount TransformTransformationFpe#mount}
  */
  readonly mount: string;
  /**
  * Name of the transformation. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#name TransformTransformationFpe#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#namespace TransformTransformationFpe#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the template used to match values on encode and decode operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#template TransformTransformationFpe#template}
  */
  readonly template: string;
  /**
  * Source of the tweak value. Valid values are `supplied`, `generated` and `internal`. Vault uses `supplied` if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#tweak_source TransformTransformationFpe#tweak_source}
  */
  readonly tweakSource?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe vault_transform_transformation_fpe}
*/
export class TransformTransformationFpe extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_transformation_fpe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransformTransformationFpe resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransformTransformationFpe to import
  * @param importFromId The id of the existing TransformTransformationFpe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransformTransformationFpe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_transform_transformation_fpe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe vault_transform_transformation_fpe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformTransformationFpeConfig
  */
  public constructor(scope: Construct, id: string, config: TransformTransformationFpeConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_transformation_fpe',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.14.0',
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
    this._deletionAllowed = config.deletionAllowed;
    this._maxTweakLen = config.maxTweakLen;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._template = config.template;
    this._tweakSource = config.tweakSource;
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

  // deletion_allowed - computed: true, optional: true, required: false
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

  // fpe_algorithm - computed: true, optional: false, required: false
  public get fpeAlgorithm() {
    return this.getStringAttribute('fpe_algorithm');
  }

  // max_tweak_len - computed: true, optional: true, required: false
  private _maxTweakLen?: number; 
  public get maxTweakLen() {
    return this.getNumberAttribute('max_tweak_len');
  }
  public set maxTweakLen(value: number) {
    this._maxTweakLen = value;
  }
  public resetMaxTweakLen() {
    this._maxTweakLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTweakLenInput() {
    return this._maxTweakLen;
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

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // tweak_source - computed: true, optional: true, required: false
  private _tweakSource?: string; 
  public get tweakSource() {
    return this.getStringAttribute('tweak_source');
  }
  public set tweakSource(value: string) {
    this._tweakSource = value;
  }
  public resetTweakSource() {
    this._tweakSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tweakSourceInput() {
    return this._tweakSource;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedRoles),
      deletion_allowed: cdktn.booleanToTerraform(this._deletionAllowed),
      max_tweak_len: cdktn.numberToTerraform(this._maxTweakLen),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      template: cdktn.stringToTerraform(this._template),
      tweak_source: cdktn.stringToTerraform(this._tweakSource),
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
      deletion_allowed: {
        value: cdktn.booleanToHclTerraform(this._deletionAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_tweak_len: {
        value: cdktn.numberToHclTerraform(this._maxTweakLen),
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
      template: {
        value: cdktn.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tweak_source: {
        value: cdktn.stringToHclTerraform(this._tweakSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
