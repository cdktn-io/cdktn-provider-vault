# `kmipSecretListener` Submodule <a name="`kmipSecretListener` Submodule" id="@cdktn/provider-vault.kmipSecretListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretListener <a name="KmipSecretListener" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener vault_kmip_secret_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer"></a>

```java
import io.cdktn.providers.vault.kmip_secret_listener.KmipSecretListener;

KmipSecretListener.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .address(java.lang.String)
    .ca(java.lang.String)
    .name(java.lang.String)
    .path(java.lang.String)
//  .additionalClientCas(java.util.List<java.lang.String>)
//  .alsoUseLegacyCa(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .serverHostnames(java.util.List<java.lang.String>)
//  .serverIps(java.util.List<java.lang.String>)
//  .tlsCipherSuites(java.lang.String)
//  .tlsMaxVersion(java.lang.String)
//  .tlsMinVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | Host:port address to listen on. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.ca">ca</a></code> | <code>java.lang.String</code> | Name of the CA to use to generate the server certificate and verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the listener. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.additionalClientCas">additionalClientCas</a></code> | <code>java.util.List<java.lang.String></code> | Names of additional TLS CAs to use to verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.alsoUseLegacyCa">alsoUseLegacyCa</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use the legacy unnamed CA for verifying client certificates as well. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.serverHostnames">serverHostnames</a></code> | <code>java.util.List<java.lang.String></code> | DNS SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.serverIps">serverIps</a></code> | <code>java.util.List<java.lang.String></code> | IP SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsCipherSuites">tlsCipherSuites</a></code> | <code>java.lang.String</code> | TLS cipher suites to allow (does not apply to tls13+). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | Maximum TLS version to accept (tls12 or tls13). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Minimum TLS version to accept (tls12 or tls13). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.address"></a>

- *Type:* java.lang.String

Host:port address to listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#address KmipSecretListener#address}

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.ca"></a>

- *Type:* java.lang.String

Name of the CA to use to generate the server certificate and verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#ca KmipSecretListener#ca}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#name KmipSecretListener#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#path KmipSecretListener#path}

---

##### `additionalClientCas`<sup>Optional</sup> <a name="additionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.additionalClientCas"></a>

- *Type:* java.util.List<java.lang.String>

Names of additional TLS CAs to use to verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#additional_client_cas KmipSecretListener#additional_client_cas}

---

##### `alsoUseLegacyCa`<sup>Optional</sup> <a name="alsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.alsoUseLegacyCa"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use the legacy unnamed CA for verifying client certificates as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#also_use_legacy_ca KmipSecretListener#also_use_legacy_ca}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#namespace KmipSecretListener#namespace}

---

##### `serverHostnames`<sup>Optional</sup> <a name="serverHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.serverHostnames"></a>

- *Type:* java.util.List<java.lang.String>

DNS SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#server_hostnames KmipSecretListener#server_hostnames}

---

##### `serverIps`<sup>Optional</sup> <a name="serverIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.serverIps"></a>

- *Type:* java.util.List<java.lang.String>

IP SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#server_ips KmipSecretListener#server_ips}

---

##### `tlsCipherSuites`<sup>Optional</sup> <a name="tlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsCipherSuites"></a>

- *Type:* java.lang.String

TLS cipher suites to allow (does not apply to tls13+).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#tls_cipher_suites KmipSecretListener#tls_cipher_suites}

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsMaxVersion"></a>

- *Type:* java.lang.String

Maximum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#tls_max_version KmipSecretListener#tls_max_version}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.Initializer.parameter.tlsMinVersion"></a>

- *Type:* java.lang.String

Minimum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#tls_min_version KmipSecretListener#tls_min_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAdditionalClientCas">resetAdditionalClientCas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAlsoUseLegacyCa">resetAlsoUseLegacyCa</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerHostnames">resetServerHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerIps">resetServerIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsCipherSuites">resetTlsCipherSuites</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMaxVersion">resetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdditionalClientCas` <a name="resetAdditionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAdditionalClientCas"></a>

```java
public void resetAdditionalClientCas()
```

##### `resetAlsoUseLegacyCa` <a name="resetAlsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetAlsoUseLegacyCa"></a>

```java
public void resetAlsoUseLegacyCa()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetServerHostnames` <a name="resetServerHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerHostnames"></a>

```java
public void resetServerHostnames()
```

##### `resetServerIps` <a name="resetServerIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetServerIps"></a>

```java
public void resetServerIps()
```

##### `resetTlsCipherSuites` <a name="resetTlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsCipherSuites"></a>

```java
public void resetTlsCipherSuites()
```

##### `resetTlsMaxVersion` <a name="resetTlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMaxVersion"></a>

```java
public void resetTlsMaxVersion()
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.resetTlsMinVersion"></a>

```java
public void resetTlsMinVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct"></a>

```java
import io.cdktn.providers.vault.kmip_secret_listener.KmipSecretListener;

KmipSecretListener.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.kmip_secret_listener.KmipSecretListener;

KmipSecretListener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.kmip_secret_listener.KmipSecretListener;

KmipSecretListener.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.kmip_secret_listener.KmipSecretListener;

KmipSecretListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KmipSecretListener.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a KmipSecretListener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KmipSecretListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KmipSecretListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the KmipSecretListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput">additionalClientCasInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput">alsoUseLegacyCaInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput">caInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput">serverHostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput">serverIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput">tlsCipherSuitesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput">tlsMaxVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas">additionalClientCas</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa">alsoUseLegacyCa</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca">ca</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames">serverHostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps">serverIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites">tlsCipherSuites</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `additionalClientCasInput`<sup>Optional</sup> <a name="additionalClientCasInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCasInput"></a>

```java
public java.util.List<java.lang.String> getAdditionalClientCasInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `alsoUseLegacyCaInput`<sup>Optional</sup> <a name="alsoUseLegacyCaInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCaInput"></a>

```java
public java.lang.Boolean|IResolvable getAlsoUseLegacyCaInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `caInput`<sup>Optional</sup> <a name="caInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.caInput"></a>

```java
public java.lang.String getCaInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `serverHostnamesInput`<sup>Optional</sup> <a name="serverHostnamesInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnamesInput"></a>

```java
public java.util.List<java.lang.String> getServerHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverIpsInput`<sup>Optional</sup> <a name="serverIpsInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIpsInput"></a>

```java
public java.util.List<java.lang.String> getServerIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsCipherSuitesInput`<sup>Optional</sup> <a name="tlsCipherSuitesInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuitesInput"></a>

```java
public java.lang.String getTlsCipherSuitesInput();
```

- *Type:* java.lang.String

---

##### `tlsMaxVersionInput`<sup>Optional</sup> <a name="tlsMaxVersionInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersionInput"></a>

```java
public java.lang.String getTlsMaxVersionInput();
```

- *Type:* java.lang.String

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersionInput"></a>

```java
public java.lang.String getTlsMinVersionInput();
```

- *Type:* java.lang.String

---

##### `additionalClientCas`<sup>Required</sup> <a name="additionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.additionalClientCas"></a>

```java
public java.util.List<java.lang.String> getAdditionalClientCas();
```

- *Type:* java.util.List<java.lang.String>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `alsoUseLegacyCa`<sup>Required</sup> <a name="alsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.alsoUseLegacyCa"></a>

```java
public java.lang.Boolean|IResolvable getAlsoUseLegacyCa();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.ca"></a>

```java
public java.lang.String getCa();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `serverHostnames`<sup>Required</sup> <a name="serverHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverHostnames"></a>

```java
public java.util.List<java.lang.String> getServerHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serverIps`<sup>Required</sup> <a name="serverIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.serverIps"></a>

```java
public java.util.List<java.lang.String> getServerIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tlsCipherSuites`<sup>Required</sup> <a name="tlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsCipherSuites"></a>

```java
public java.lang.String getTlsCipherSuites();
```

- *Type:* java.lang.String

---

##### `tlsMaxVersion`<sup>Required</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMaxVersion"></a>

```java
public java.lang.String getTlsMaxVersion();
```

- *Type:* java.lang.String

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretListenerConfig <a name="KmipSecretListenerConfig" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.kmip_secret_listener.KmipSecretListenerConfig;

KmipSecretListenerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .address(java.lang.String)
    .ca(java.lang.String)
    .name(java.lang.String)
    .path(java.lang.String)
//  .additionalClientCas(java.util.List<java.lang.String>)
//  .alsoUseLegacyCa(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .serverHostnames(java.util.List<java.lang.String>)
//  .serverIps(java.util.List<java.lang.String>)
//  .tlsCipherSuites(java.lang.String)
//  .tlsMaxVersion(java.lang.String)
//  .tlsMinVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address">address</a></code> | <code>java.lang.String</code> | Host:port address to listen on. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca">ca</a></code> | <code>java.lang.String</code> | Name of the CA to use to generate the server certificate and verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the listener. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas">additionalClientCas</a></code> | <code>java.util.List<java.lang.String></code> | Names of additional TLS CAs to use to verify client certificates. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa">alsoUseLegacyCa</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Use the legacy unnamed CA for verifying client certificates as well. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames">serverHostnames</a></code> | <code>java.util.List<java.lang.String></code> | DNS SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps">serverIps</a></code> | <code>java.util.List<java.lang.String></code> | IP SANs to include in listener certificate. |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites">tlsCipherSuites</a></code> | <code>java.lang.String</code> | TLS cipher suites to allow (does not apply to tls13+). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | Maximum TLS version to accept (tls12 or tls13). |
| <code><a href="#@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Minimum TLS version to accept (tls12 or tls13). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Host:port address to listen on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#address KmipSecretListener#address}

---

##### `ca`<sup>Required</sup> <a name="ca" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.ca"></a>

```java
public java.lang.String getCa();
```

- *Type:* java.lang.String

Name of the CA to use to generate the server certificate and verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#ca KmipSecretListener#ca}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#name KmipSecretListener#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#path KmipSecretListener#path}

---

##### `additionalClientCas`<sup>Optional</sup> <a name="additionalClientCas" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.additionalClientCas"></a>

```java
public java.util.List<java.lang.String> getAdditionalClientCas();
```

- *Type:* java.util.List<java.lang.String>

Names of additional TLS CAs to use to verify client certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#additional_client_cas KmipSecretListener#additional_client_cas}

---

##### `alsoUseLegacyCa`<sup>Optional</sup> <a name="alsoUseLegacyCa" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.alsoUseLegacyCa"></a>

```java
public java.lang.Boolean|IResolvable getAlsoUseLegacyCa();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Use the legacy unnamed CA for verifying client certificates as well.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#also_use_legacy_ca KmipSecretListener#also_use_legacy_ca}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#namespace KmipSecretListener#namespace}

---

##### `serverHostnames`<sup>Optional</sup> <a name="serverHostnames" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverHostnames"></a>

```java
public java.util.List<java.lang.String> getServerHostnames();
```

- *Type:* java.util.List<java.lang.String>

DNS SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#server_hostnames KmipSecretListener#server_hostnames}

---

##### `serverIps`<sup>Optional</sup> <a name="serverIps" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.serverIps"></a>

```java
public java.util.List<java.lang.String> getServerIps();
```

- *Type:* java.util.List<java.lang.String>

IP SANs to include in listener certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#server_ips KmipSecretListener#server_ips}

---

##### `tlsCipherSuites`<sup>Optional</sup> <a name="tlsCipherSuites" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsCipherSuites"></a>

```java
public java.lang.String getTlsCipherSuites();
```

- *Type:* java.lang.String

TLS cipher suites to allow (does not apply to tls13+).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#tls_cipher_suites KmipSecretListener#tls_cipher_suites}

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMaxVersion"></a>

```java
public java.lang.String getTlsMaxVersion();
```

- *Type:* java.lang.String

Maximum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#tls_max_version KmipSecretListener#tls_max_version}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktn/provider-vault.kmipSecretListener.KmipSecretListenerConfig.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

Minimum TLS version to accept (tls12 or tls13).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/kmip_secret_listener#tls_min_version KmipSecretListener#tls_min_version}

---



