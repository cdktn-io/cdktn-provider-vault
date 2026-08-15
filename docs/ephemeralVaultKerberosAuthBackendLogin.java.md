# `ephemeralVaultKerberosAuthBackendLogin` Submodule <a name="`ephemeralVaultKerberosAuthBackendLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultKerberosAuthBackendLogin <a name="EphemeralVaultKerberosAuthBackendLogin" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login vault_kerberos_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_kerberos_auth_backend_login.EphemeralVaultKerberosAuthBackendLogin;

EphemeralVaultKerberosAuthBackendLogin.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .keytabPath(java.lang.String)
    .krb5ConfPath(java.lang.String)
    .mount(java.lang.String)
    .realm(java.lang.String)
    .service(java.lang.String)
    .username(java.lang.String)
//  .disableFastNegotiation(java.lang.Boolean|IResolvable)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .removeInstanceName(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.keytabPath">keytabPath</a></code> | <code>java.lang.String</code> | Path to the keytab file for authentication. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.krb5ConfPath">krb5ConfPath</a></code> | <code>java.lang.String</code> | Path to the krb5.conf configuration file. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Kerberos auth method is mounted. Defaults to 'kerberos'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.realm">realm</a></code> | <code>java.lang.String</code> | Kerberos realm name. Must match the UPNDomain in LDAP config. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | Service principal name for obtaining a service ticket. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username for the keytab entry. Must match a service account in LDAP. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.disableFastNegotiation">disableFastNegotiation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable FAST negotiation. Default: false. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.removeInstanceName">removeInstanceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Remove instance name from principal. Default: false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `keytabPath`<sup>Required</sup> <a name="keytabPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.keytabPath"></a>

- *Type:* java.lang.String

Path to the keytab file for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#keytab_path EphemeralVaultKerberosAuthBackendLogin#keytab_path}

---

##### `krb5ConfPath`<sup>Required</sup> <a name="krb5ConfPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.krb5ConfPath"></a>

- *Type:* java.lang.String

Path to the krb5.conf configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#krb5conf_path EphemeralVaultKerberosAuthBackendLogin#krb5conf_path}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the Kerberos auth method is mounted. Defaults to 'kerberos'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount EphemeralVaultKerberosAuthBackendLogin#mount}

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.realm"></a>

- *Type:* java.lang.String

Kerberos realm name. Must match the UPNDomain in LDAP config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#realm EphemeralVaultKerberosAuthBackendLogin#realm}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.service"></a>

- *Type:* java.lang.String

Service principal name for obtaining a service ticket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#service EphemeralVaultKerberosAuthBackendLogin#service}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username for the keytab entry. Must match a service account in LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#username EphemeralVaultKerberosAuthBackendLogin#username}

---

##### `disableFastNegotiation`<sup>Optional</sup> <a name="disableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.disableFastNegotiation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable FAST negotiation. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#disable_fast_negotiation EphemeralVaultKerberosAuthBackendLogin#disable_fast_negotiation}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount_id EphemeralVaultKerberosAuthBackendLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#namespace EphemeralVaultKerberosAuthBackendLogin#namespace}

---

##### `removeInstanceName`<sup>Optional</sup> <a name="removeInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.removeInstanceName"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Remove instance name from principal. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#remove_instance_name EphemeralVaultKerberosAuthBackendLogin#remove_instance_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetDisableFastNegotiation">resetDisableFastNegotiation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetRemoveInstanceName">resetRemoveInstanceName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDisableFastNegotiation` <a name="resetDisableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetDisableFastNegotiation"></a>

```java
public void resetDisableFastNegotiation()
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRemoveInstanceName` <a name="resetRemoveInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetRemoveInstanceName"></a>

```java
public void resetRemoveInstanceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_kerberos_auth_backend_login.EphemeralVaultKerberosAuthBackendLogin;

EphemeralVaultKerberosAuthBackendLogin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_kerberos_auth_backend_login.EphemeralVaultKerberosAuthBackendLogin;

EphemeralVaultKerberosAuthBackendLogin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_kerberos_auth_backend_login.EphemeralVaultKerberosAuthBackendLogin;

EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.identityPolicies">identityPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.metadata">metadata</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.orphan">orphan</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.renewable">renewable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiationInput">disableFastNegotiationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPathInput">keytabPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPathInput">krb5ConfPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realmInput">realmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceNameInput">removeInstanceNameInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiation">disableFastNegotiation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPath">keytabPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPath">krb5ConfPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realm">realm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceName">removeInstanceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `identityPolicies`<sup>Required</sup> <a name="identityPolicies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.identityPolicies"></a>

```java
public java.util.List<java.lang.String> getIdentityPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.orphan"></a>

```java
public IResolvable getOrphan();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.renewable"></a>

```java
public IResolvable getRenewable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableFastNegotiationInput`<sup>Optional</sup> <a name="disableFastNegotiationInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableFastNegotiationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keytabPathInput`<sup>Optional</sup> <a name="keytabPathInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPathInput"></a>

```java
public java.lang.String getKeytabPathInput();
```

- *Type:* java.lang.String

---

##### `krb5ConfPathInput`<sup>Optional</sup> <a name="krb5ConfPathInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPathInput"></a>

```java
public java.lang.String getKrb5ConfPathInput();
```

- *Type:* java.lang.String

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realmInput"></a>

```java
public java.lang.String getRealmInput();
```

- *Type:* java.lang.String

---

##### `removeInstanceNameInput`<sup>Optional</sup> <a name="removeInstanceNameInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceNameInput"></a>

```java
public java.lang.Boolean|IResolvable getRemoveInstanceNameInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `disableFastNegotiation`<sup>Required</sup> <a name="disableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiation"></a>

```java
public java.lang.Boolean|IResolvable getDisableFastNegotiation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keytabPath`<sup>Required</sup> <a name="keytabPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPath"></a>

```java
public java.lang.String getKeytabPath();
```

- *Type:* java.lang.String

---

##### `krb5ConfPath`<sup>Required</sup> <a name="krb5ConfPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPath"></a>

```java
public java.lang.String getKrb5ConfPath();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

---

##### `removeInstanceName`<sup>Required</sup> <a name="removeInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceName"></a>

```java
public java.lang.Boolean|IResolvable getRemoveInstanceName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultKerberosAuthBackendLoginConfig <a name="EphemeralVaultKerberosAuthBackendLoginConfig" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_kerberos_auth_backend_login.EphemeralVaultKerberosAuthBackendLoginConfig;

EphemeralVaultKerberosAuthBackendLoginConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .keytabPath(java.lang.String)
    .krb5ConfPath(java.lang.String)
    .mount(java.lang.String)
    .realm(java.lang.String)
    .service(java.lang.String)
    .username(java.lang.String)
//  .disableFastNegotiation(java.lang.Boolean|IResolvable)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .removeInstanceName(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.keytabPath">keytabPath</a></code> | <code>java.lang.String</code> | Path to the keytab file for authentication. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.krb5ConfPath">krb5ConfPath</a></code> | <code>java.lang.String</code> | Path to the krb5.conf configuration file. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the Kerberos auth method is mounted. Defaults to 'kerberos'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.realm">realm</a></code> | <code>java.lang.String</code> | Kerberos realm name. Must match the UPNDomain in LDAP config. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.service">service</a></code> | <code>java.lang.String</code> | Service principal name for obtaining a service ticket. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username for the keytab entry. Must match a service account in LDAP. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.disableFastNegotiation">disableFastNegotiation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Disable FAST negotiation. Default: false. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.removeInstanceName">removeInstanceName</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Remove instance name from principal. Default: false. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `keytabPath`<sup>Required</sup> <a name="keytabPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.keytabPath"></a>

```java
public java.lang.String getKeytabPath();
```

- *Type:* java.lang.String

Path to the keytab file for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#keytab_path EphemeralVaultKerberosAuthBackendLogin#keytab_path}

---

##### `krb5ConfPath`<sup>Required</sup> <a name="krb5ConfPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.krb5ConfPath"></a>

```java
public java.lang.String getKrb5ConfPath();
```

- *Type:* java.lang.String

Path to the krb5.conf configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#krb5conf_path EphemeralVaultKerberosAuthBackendLogin#krb5conf_path}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the Kerberos auth method is mounted. Defaults to 'kerberos'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount EphemeralVaultKerberosAuthBackendLogin#mount}

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

Kerberos realm name. Must match the UPNDomain in LDAP config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#realm EphemeralVaultKerberosAuthBackendLogin#realm}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Service principal name for obtaining a service ticket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#service EphemeralVaultKerberosAuthBackendLogin#service}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the keytab entry. Must match a service account in LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#username EphemeralVaultKerberosAuthBackendLogin#username}

---

##### `disableFastNegotiation`<sup>Optional</sup> <a name="disableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.disableFastNegotiation"></a>

```java
public java.lang.Boolean|IResolvable getDisableFastNegotiation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Disable FAST negotiation. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#disable_fast_negotiation EphemeralVaultKerberosAuthBackendLogin#disable_fast_negotiation}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount_id EphemeralVaultKerberosAuthBackendLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#namespace EphemeralVaultKerberosAuthBackendLogin#namespace}

---

##### `removeInstanceName`<sup>Optional</sup> <a name="removeInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.removeInstanceName"></a>

```java
public java.lang.Boolean|IResolvable getRemoveInstanceName();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Remove instance name from principal. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#remove_instance_name EphemeralVaultKerberosAuthBackendLogin#remove_instance_name}

---



