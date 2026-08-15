/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransformKeyConfigurationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Amount of time the key should live before being automatically rotated. A value of 0 disables automatic rotation for the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#auto_rotate_period TransformKeyConfiguration#auto_rotate_period}
  */
  readonly autoRotatePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#id TransformKeyConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Minimum key version that vault uses to decode values for the transform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#min_decryption_version TransformKeyConfiguration#min_decryption_version}
  */
  readonly minDecryptionVersion?: number;
  /**
  * The name of the transform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#name TransformKeyConfiguration#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#namespace TransformKeyConfiguration#namespace}
  */
  readonly namespace?: string;
  /**
  * The mount path for the transform backend, for example the path given in "$ vault secrets enable -path=transform transform".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#path TransformKeyConfiguration#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration vault_transform_key_configuration}
*/
export class TransformKeyConfiguration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_key_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransformKeyConfiguration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransformKeyConfiguration to import
  * @param importFromId The id of the existing TransformKeyConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransformKeyConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_transform_key_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/transform_key_configuration vault_transform_key_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformKeyConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: TransformKeyConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_key_configuration',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.11.0',
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
    this._autoRotatePeriod = config.autoRotatePeriod;
    this._id = config.id;
    this._minDecryptionVersion = config.minDecryptionVersion;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rotate_period - computed: false, optional: true, required: false
  private _autoRotatePeriod?: number; 
  public get autoRotatePeriod() {
    return this.getNumberAttribute('auto_rotate_period');
  }
  public set autoRotatePeriod(value: number) {
    this._autoRotatePeriod = value;
  }
  public resetAutoRotatePeriod() {
    this._autoRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotatePeriodInput() {
    return this._autoRotatePeriod;
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

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // min_available_version - computed: true, optional: false, required: false
  public get minAvailableVersion() {
    return this.getNumberAttribute('min_available_version');
  }

  // min_decryption_version - computed: false, optional: true, required: false
  private _minDecryptionVersion?: number; 
  public get minDecryptionVersion() {
    return this.getNumberAttribute('min_decryption_version');
  }
  public set minDecryptionVersion(value: number) {
    this._minDecryptionVersion = value;
  }
  public resetMinDecryptionVersion() {
    this._minDecryptionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDecryptionVersionInput() {
    return this._minDecryptionVersion;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_rotate_period: cdktn.numberToTerraform(this._autoRotatePeriod),
      id: cdktn.stringToTerraform(this._id),
      min_decryption_version: cdktn.numberToTerraform(this._minDecryptionVersion),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      path: cdktn.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_rotate_period: {
        value: cdktn.numberToHclTerraform(this._autoRotatePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_decryption_version: {
        value: cdktn.numberToHclTerraform(this._minDecryptionVersion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
