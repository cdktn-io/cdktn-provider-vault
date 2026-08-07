# `ephemeralVaultCfAuthLogin` Submodule <a name="`ephemeralVaultCfAuthLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultCfAuthLogin <a name="EphemeralVaultCfAuthLogin" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login vault_cf_auth_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultCfAuthLogin(Construct Scope, string Id, EphemeralVaultCfAuthLoginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig">EphemeralVaultCfAuthLoginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig">EphemeralVaultCfAuthLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMount">ResetMount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMount` <a name="ResetMount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMount"></a>

```csharp
private void ResetMount()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultCfAuthLogin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultCfAuthLogin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultCfAuthLogin.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.renewable">Renewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCertInput">CfInstanceCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signatureInput">SignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTimeInput">SigningTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCert">CfInstanceCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signature">Signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTime">SigningTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.renewable"></a>

```csharp
public IResolvable Renewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CfInstanceCertInput`<sup>Optional</sup> <a name="CfInstanceCertInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCertInput"></a>

```csharp
public string CfInstanceCertInput { get; }
```

- *Type:* string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `SignatureInput`<sup>Optional</sup> <a name="SignatureInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signatureInput"></a>

```csharp
public string SignatureInput { get; }
```

- *Type:* string

---

##### `SigningTimeInput`<sup>Optional</sup> <a name="SigningTimeInput" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTimeInput"></a>

```csharp
public string SigningTimeInput { get; }
```

- *Type:* string

---

##### `CfInstanceCert`<sup>Required</sup> <a name="CfInstanceCert" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.cfInstanceCert"></a>

```csharp
public string CfInstanceCert { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signature"></a>

```csharp
public string Signature { get; }
```

- *Type:* string

---

##### `SigningTime`<sup>Required</sup> <a name="SigningTime" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.signingTime"></a>

```csharp
public string SigningTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLogin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultCfAuthLoginConfig <a name="EphemeralVaultCfAuthLoginConfig" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultCfAuthLoginConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string CfInstanceCert,
    string Role,
    string Signature,
    string SigningTime,
    string Mount = null,
    string MountId = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.cfInstanceCert">CfInstanceCert</a></code> | <code>string</code> | The full body of the file available at the path denoted by `CF_INSTANCE_CERT`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.role">Role</a></code> | <code>string</code> | Name of the CF auth role to log in with. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signature">Signature</a></code> | <code>string</code> | The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signingTime">SigningTime</a></code> | <code>string</code> | The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CfInstanceCert`<sup>Required</sup> <a name="CfInstanceCert" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.cfInstanceCert"></a>

```csharp
public string CfInstanceCert { get; set; }
```

- *Type:* string

The full body of the file available at the path denoted by `CF_INSTANCE_CERT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#cf_instance_cert EphemeralVaultCfAuthLogin#cf_instance_cert}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Name of the CF auth role to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#role EphemeralVaultCfAuthLogin#role}

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signature"></a>

```csharp
public string Signature { get; set; }
```

- *Type:* string

The RSA-PSS/SHA256 signature generated using `CF_INSTANCE_KEY` over the concatenation of signing_time, cf_instance_cert, and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#signature EphemeralVaultCfAuthLogin#signature}

---

##### `SigningTime`<sup>Required</sup> <a name="SigningTime" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.signingTime"></a>

```csharp
public string SigningTime { get; set; }
```

- *Type:* string

The date and time used to construct the signature (e.g. `2006-01-02T15:04:05Z`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#signing_time EphemeralVaultCfAuthLogin#signing_time}

---

##### `Mount`<sup>Optional</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#mount EphemeralVaultCfAuthLogin#mount}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#mount_id EphemeralVaultCfAuthLogin#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultCfAuthLogin.EphemeralVaultCfAuthLoginConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/cf_auth_login#namespace EphemeralVaultCfAuthLogin#namespace}

---



