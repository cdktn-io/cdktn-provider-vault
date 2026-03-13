/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KmipSecretListenerConfig extends cdktn.TerraformMetaArguments {
  /**
  * Names of additional TLS CAs to use to verify client certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#additional_client_cas KmipSecretListener#additional_client_cas}
  */
  readonly additionalClientCas?: string[];
  /**
  * Host:port address to listen on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#address KmipSecretListener#address}
  */
  readonly address: string;
  /**
  * Use the legacy unnamed CA for verifying client certificates as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#also_use_legacy_ca KmipSecretListener#also_use_legacy_ca}
  */
  readonly alsoUseLegacyCa?: boolean | cdktn.IResolvable;
  /**
  * Name of the CA to use to generate the server certificate and verify client certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#ca KmipSecretListener#ca}
  */
  readonly ca: string;
  /**
  * Unique name for the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#name KmipSecretListener#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#namespace KmipSecretListener#namespace}
  */
  readonly namespace?: string;
  /**
  * Path where KMIP backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#path KmipSecretListener#path}
  */
  readonly path: string;
  /**
  * DNS SANs to include in listener certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_hostnames KmipSecretListener#server_hostnames}
  */
  readonly serverHostnames?: string[];
  /**
  * IP SANs to include in listener certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#server_ips KmipSecretListener#server_ips}
  */
  readonly serverIps?: string[];
  /**
  * TLS cipher suites to allow (does not apply to tls13+).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_cipher_suites KmipSecretListener#tls_cipher_suites}
  */
  readonly tlsCipherSuites?: string;
  /**
  * Maximum TLS version to accept (tls12 or tls13).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_max_version KmipSecretListener#tls_max_version}
  */
  readonly tlsMaxVersion?: string;
  /**
  * Minimum TLS version to accept (tls12 or tls13).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#tls_min_version KmipSecretListener#tls_min_version}
  */
  readonly tlsMinVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener vault_kmip_secret_listener}
*/
export class KmipSecretListener extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kmip_secret_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmipSecretListener to import
  * @param importFromId The id of the existing KmipSecretListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmipSecretListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_kmip_secret_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/kmip_secret_listener vault_kmip_secret_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmipSecretListenerConfig
  */
  public constructor(scope: Construct, id: string, config: KmipSecretListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kmip_secret_listener',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.8.0',
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
    this._additionalClientCas = config.additionalClientCas;
    this._address = config.address;
    this._alsoUseLegacyCa = config.alsoUseLegacyCa;
    this._ca = config.ca;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._serverHostnames = config.serverHostnames;
    this._serverIps = config.serverIps;
    this._tlsCipherSuites = config.tlsCipherSuites;
    this._tlsMaxVersion = config.tlsMaxVersion;
    this._tlsMinVersion = config.tlsMinVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_client_cas - computed: false, optional: true, required: false
  private _additionalClientCas?: string[]; 
  public get additionalClientCas() {
    return this.getListAttribute('additional_client_cas');
  }
  public set additionalClientCas(value: string[]) {
    this._additionalClientCas = value;
  }
  public resetAdditionalClientCas() {
    this._additionalClientCas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalClientCasInput() {
    return this._additionalClientCas;
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // also_use_legacy_ca - computed: true, optional: true, required: false
  private _alsoUseLegacyCa?: boolean | cdktn.IResolvable; 
  public get alsoUseLegacyCa() {
    return this.getBooleanAttribute('also_use_legacy_ca');
  }
  public set alsoUseLegacyCa(value: boolean | cdktn.IResolvable) {
    this._alsoUseLegacyCa = value;
  }
  public resetAlsoUseLegacyCa() {
    this._alsoUseLegacyCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alsoUseLegacyCaInput() {
    return this._alsoUseLegacyCa;
  }

  // ca - computed: false, optional: false, required: true
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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

  // server_hostnames - computed: false, optional: true, required: false
  private _serverHostnames?: string[]; 
  public get serverHostnames() {
    return this.getListAttribute('server_hostnames');
  }
  public set serverHostnames(value: string[]) {
    this._serverHostnames = value;
  }
  public resetServerHostnames() {
    this._serverHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnamesInput() {
    return this._serverHostnames;
  }

  // server_ips - computed: true, optional: true, required: false
  private _serverIps?: string[]; 
  public get serverIps() {
    return this.getListAttribute('server_ips');
  }
  public set serverIps(value: string[]) {
    this._serverIps = value;
  }
  public resetServerIps() {
    this._serverIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpsInput() {
    return this._serverIps;
  }

  // tls_cipher_suites - computed: false, optional: true, required: false
  private _tlsCipherSuites?: string; 
  public get tlsCipherSuites() {
    return this.getStringAttribute('tls_cipher_suites');
  }
  public set tlsCipherSuites(value: string) {
    this._tlsCipherSuites = value;
  }
  public resetTlsCipherSuites() {
    this._tlsCipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCipherSuitesInput() {
    return this._tlsCipherSuites;
  }

  // tls_max_version - computed: false, optional: true, required: false
  private _tlsMaxVersion?: string; 
  public get tlsMaxVersion() {
    return this.getStringAttribute('tls_max_version');
  }
  public set tlsMaxVersion(value: string) {
    this._tlsMaxVersion = value;
  }
  public resetTlsMaxVersion() {
    this._tlsMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMaxVersionInput() {
    return this._tlsMaxVersion;
  }

  // tls_min_version - computed: true, optional: true, required: false
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_client_cas: cdktn.listMapper(cdktn.stringToTerraform, false)(this._additionalClientCas),
      address: cdktn.stringToTerraform(this._address),
      also_use_legacy_ca: cdktn.booleanToTerraform(this._alsoUseLegacyCa),
      ca: cdktn.stringToTerraform(this._ca),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      path: cdktn.stringToTerraform(this._path),
      server_hostnames: cdktn.listMapper(cdktn.stringToTerraform, false)(this._serverHostnames),
      server_ips: cdktn.listMapper(cdktn.stringToTerraform, false)(this._serverIps),
      tls_cipher_suites: cdktn.stringToTerraform(this._tlsCipherSuites),
      tls_max_version: cdktn.stringToTerraform(this._tlsMaxVersion),
      tls_min_version: cdktn.stringToTerraform(this._tlsMinVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_client_cas: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._additionalClientCas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      address: {
        value: cdktn.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      also_use_legacy_ca: {
        value: cdktn.booleanToHclTerraform(this._alsoUseLegacyCa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca: {
        value: cdktn.stringToHclTerraform(this._ca),
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
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_hostnames: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._serverHostnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_ips: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._serverIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tls_cipher_suites: {
        value: cdktn.stringToHclTerraform(this._tlsCipherSuites),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_max_version: {
        value: cdktn.stringToHclTerraform(this._tlsMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_min_version: {
        value: cdktn.stringToHclTerraform(this._tlsMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
