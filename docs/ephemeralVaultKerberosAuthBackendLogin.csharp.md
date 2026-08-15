# `ephemeralVaultKerberosAuthBackendLogin` Submodule <a name="`ephemeralVaultKerberosAuthBackendLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultKerberosAuthBackendLogin <a name="EphemeralVaultKerberosAuthBackendLogin" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login vault_kerberos_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultKerberosAuthBackendLogin(Construct Scope, string Id, EphemeralVaultKerberosAuthBackendLoginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig">EphemeralVaultKerberosAuthBackendLoginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig">EphemeralVaultKerberosAuthBackendLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetDisableFastNegotiation">ResetDisableFastNegotiation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetRemoveInstanceName">ResetRemoveInstanceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDisableFastNegotiation` <a name="ResetDisableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetDisableFastNegotiation"></a>

```csharp
private void ResetDisableFastNegotiation()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRemoveInstanceName` <a name="ResetRemoveInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.resetRemoveInstanceName"></a>

```csharp
private void ResetRemoveInstanceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultKerberosAuthBackendLogin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultKerberosAuthBackendLogin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultKerberosAuthBackendLogin.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.identityPolicies">IdentityPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.metadata">Metadata</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.orphan">Orphan</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.renewable">Renewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiationInput">DisableFastNegotiationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPathInput">KeytabPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPathInput">Krb5ConfPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realmInput">RealmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceNameInput">RemoveInstanceNameInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiation">DisableFastNegotiation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPath">KeytabPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPath">Krb5ConfPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realm">Realm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceName">RemoveInstanceName</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `IdentityPolicies`<sup>Required</sup> <a name="IdentityPolicies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.identityPolicies"></a>

```csharp
public string[] IdentityPolicies { get; }
```

- *Type:* string[]

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Orphan`<sup>Required</sup> <a name="Orphan" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.orphan"></a>

```csharp
public IResolvable Orphan { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.renewable"></a>

```csharp
public IResolvable Renewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `DisableFastNegotiationInput`<sup>Optional</sup> <a name="DisableFastNegotiationInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiationInput"></a>

```csharp
public bool|IResolvable DisableFastNegotiationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeytabPathInput`<sup>Optional</sup> <a name="KeytabPathInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPathInput"></a>

```csharp
public string KeytabPathInput { get; }
```

- *Type:* string

---

##### `Krb5ConfPathInput`<sup>Optional</sup> <a name="Krb5ConfPathInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPathInput"></a>

```csharp
public string Krb5ConfPathInput { get; }
```

- *Type:* string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RealmInput`<sup>Optional</sup> <a name="RealmInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realmInput"></a>

```csharp
public string RealmInput { get; }
```

- *Type:* string

---

##### `RemoveInstanceNameInput`<sup>Optional</sup> <a name="RemoveInstanceNameInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceNameInput"></a>

```csharp
public bool|IResolvable RemoveInstanceNameInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `DisableFastNegotiation`<sup>Required</sup> <a name="DisableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.disableFastNegotiation"></a>

```csharp
public bool|IResolvable DisableFastNegotiation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeytabPath`<sup>Required</sup> <a name="KeytabPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.keytabPath"></a>

```csharp
public string KeytabPath { get; }
```

- *Type:* string

---

##### `Krb5ConfPath`<sup>Required</sup> <a name="Krb5ConfPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.krb5ConfPath"></a>

```csharp
public string Krb5ConfPath { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.realm"></a>

```csharp
public string Realm { get; }
```

- *Type:* string

---

##### `RemoveInstanceName`<sup>Required</sup> <a name="RemoveInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.removeInstanceName"></a>

```csharp
public bool|IResolvable RemoveInstanceName { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLogin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultKerberosAuthBackendLoginConfig <a name="EphemeralVaultKerberosAuthBackendLoginConfig" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultKerberosAuthBackendLoginConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string KeytabPath,
    string Krb5ConfPath,
    string Mount,
    string Realm,
    string Service,
    string Username,
    bool|IResolvable DisableFastNegotiation = null,
    string MountId = null,
    string Namespace = null,
    bool|IResolvable RemoveInstanceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.keytabPath">KeytabPath</a></code> | <code>string</code> | Path to the keytab file for authentication. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.krb5ConfPath">Krb5ConfPath</a></code> | <code>string</code> | Path to the krb5.conf configuration file. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mount">Mount</a></code> | <code>string</code> | Path where the Kerberos auth method is mounted. Defaults to 'kerberos'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.realm">Realm</a></code> | <code>string</code> | Kerberos realm name. Must match the UPNDomain in LDAP config. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.service">Service</a></code> | <code>string</code> | Service principal name for obtaining a service ticket. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.username">Username</a></code> | <code>string</code> | Username for the keytab entry. Must match a service account in LDAP. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.disableFastNegotiation">DisableFastNegotiation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Disable FAST negotiation. Default: false. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.removeInstanceName">RemoveInstanceName</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Remove instance name from principal. Default: false. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `KeytabPath`<sup>Required</sup> <a name="KeytabPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.keytabPath"></a>

```csharp
public string KeytabPath { get; set; }
```

- *Type:* string

Path to the keytab file for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#keytab_path EphemeralVaultKerberosAuthBackendLogin#keytab_path}

---

##### `Krb5ConfPath`<sup>Required</sup> <a name="Krb5ConfPath" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.krb5ConfPath"></a>

```csharp
public string Krb5ConfPath { get; set; }
```

- *Type:* string

Path to the krb5.conf configuration file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#krb5conf_path EphemeralVaultKerberosAuthBackendLogin#krb5conf_path}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Path where the Kerberos auth method is mounted. Defaults to 'kerberos'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount EphemeralVaultKerberosAuthBackendLogin#mount}

---

##### `Realm`<sup>Required</sup> <a name="Realm" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.realm"></a>

```csharp
public string Realm { get; set; }
```

- *Type:* string

Kerberos realm name. Must match the UPNDomain in LDAP config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#realm EphemeralVaultKerberosAuthBackendLogin#realm}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service principal name for obtaining a service ticket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#service EphemeralVaultKerberosAuthBackendLogin#service}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for the keytab entry. Must match a service account in LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#username EphemeralVaultKerberosAuthBackendLogin#username}

---

##### `DisableFastNegotiation`<sup>Optional</sup> <a name="DisableFastNegotiation" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.disableFastNegotiation"></a>

```csharp
public bool|IResolvable DisableFastNegotiation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Disable FAST negotiation. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#disable_fast_negotiation EphemeralVaultKerberosAuthBackendLogin#disable_fast_negotiation}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#mount_id EphemeralVaultKerberosAuthBackendLogin#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#namespace EphemeralVaultKerberosAuthBackendLogin#namespace}

---

##### `RemoveInstanceName`<sup>Optional</sup> <a name="RemoveInstanceName" id="@cdktn/provider-vault.ephemeralVaultKerberosAuthBackendLogin.EphemeralVaultKerberosAuthBackendLoginConfig.property.removeInstanceName"></a>

```csharp
public bool|IResolvable RemoveInstanceName { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Remove instance name from principal. Default: false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kerberos_auth_backend_login#remove_instance_name EphemeralVaultKerberosAuthBackendLogin#remove_instance_name}

---



