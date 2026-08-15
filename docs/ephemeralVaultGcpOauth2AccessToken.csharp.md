# `ephemeralVaultGcpOauth2AccessToken` Submodule <a name="`ephemeralVaultGcpOauth2AccessToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpOauth2AccessToken <a name="EphemeralVaultGcpOauth2AccessToken" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token vault_gcp_oauth2_access_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultGcpOauth2AccessToken(Construct Scope, string Id, EphemeralVaultGcpOauth2AccessTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig">EphemeralVaultGcpOauth2AccessTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig">EphemeralVaultGcpOauth2AccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetImpersonatedAccount">ResetImpersonatedAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetRoleset">ResetRoleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetStaticAccount">ResetStaticAccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetImpersonatedAccount` <a name="ResetImpersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetImpersonatedAccount"></a>

```csharp
private void ResetImpersonatedAccount()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRoleset` <a name="ResetRoleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetRoleset"></a>

```csharp
private void ResetRoleset()
```

##### `ResetStaticAccount` <a name="ResetStaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.resetStaticAccount"></a>

```csharp
private void ResetStaticAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGcpOauth2AccessToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGcpOauth2AccessToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGcpOauth2AccessToken.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseId">LeaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseRenewable">LeaseRenewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseStartTime">LeaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tokenTtl">TokenTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccountInput">ImpersonatedAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.rolesetInput">RolesetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccountInput">StaticAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccount">ImpersonatedAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.roleset">Roleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccount">StaticAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseId"></a>

```csharp
public string LeaseId { get; }
```

- *Type:* string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseRenewable"></a>

```csharp
public IResolvable LeaseRenewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.leaseStartTime"></a>

```csharp
public string LeaseStartTime { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `TokenTtl`<sup>Required</sup> <a name="TokenTtl" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tokenTtl"></a>

```csharp
public double TokenTtl { get; }
```

- *Type:* double

---

##### `ImpersonatedAccountInput`<sup>Optional</sup> <a name="ImpersonatedAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccountInput"></a>

```csharp
public string ImpersonatedAccountInput { get; }
```

- *Type:* string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RolesetInput`<sup>Optional</sup> <a name="RolesetInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.rolesetInput"></a>

```csharp
public string RolesetInput { get; }
```

- *Type:* string

---

##### `StaticAccountInput`<sup>Optional</sup> <a name="StaticAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccountInput"></a>

```csharp
public string StaticAccountInput { get; }
```

- *Type:* string

---

##### `ImpersonatedAccount`<sup>Required</sup> <a name="ImpersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.impersonatedAccount"></a>

```csharp
public string ImpersonatedAccount { get; }
```

- *Type:* string

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Roleset`<sup>Required</sup> <a name="Roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.roleset"></a>

```csharp
public string Roleset { get; }
```

- *Type:* string

---

##### `StaticAccount`<sup>Required</sup> <a name="StaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.staticAccount"></a>

```csharp
public string StaticAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpOauth2AccessTokenConfig <a name="EphemeralVaultGcpOauth2AccessTokenConfig" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultGcpOauth2AccessTokenConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Mount,
    string ImpersonatedAccount = null,
    double MaxRetries = null,
    string MountId = null,
    string Namespace = null,
    string Roleset = null,
    string StaticAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.impersonatedAccount">ImpersonatedAccount</a></code> | <code>string</code> | GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Maximum number of retries when the GCP service account or key is not yet ready. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.roleset">Roleset</a></code> | <code>string</code> | GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.staticAccount">StaticAccount</a></code> | <code>string</code> | GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#mount EphemeralVaultGcpOauth2AccessToken#mount}

---

##### `ImpersonatedAccount`<sup>Optional</sup> <a name="ImpersonatedAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.impersonatedAccount"></a>

```csharp
public string ImpersonatedAccount { get; set; }
```

- *Type:* string

GCP Secret Impersonated Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#impersonated_account EphemeralVaultGcpOauth2AccessToken#impersonated_account}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Maximum number of retries when the GCP service account or key is not yet ready.

Each retry waits 1 second. Defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#max_retries EphemeralVaultGcpOauth2AccessToken#max_retries}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#mount_id EphemeralVaultGcpOauth2AccessToken#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#namespace EphemeralVaultGcpOauth2AccessToken#namespace}

---

##### `Roleset`<sup>Optional</sup> <a name="Roleset" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.roleset"></a>

```csharp
public string Roleset { get; set; }
```

- *Type:* string

GCP Secret Roleset to generate OAuth2 access token for. Mutually exclusive with `static_account` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#roleset EphemeralVaultGcpOauth2AccessToken#roleset}

---

##### `StaticAccount`<sup>Optional</sup> <a name="StaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpOauth2AccessToken.EphemeralVaultGcpOauth2AccessTokenConfig.property.staticAccount"></a>

```csharp
public string StaticAccount { get; set; }
```

- *Type:* string

GCP Secret Static Account to generate OAuth2 access token for. Mutually exclusive with `roleset` and `impersonated_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcp_oauth2_access_token#static_account EphemeralVaultGcpOauth2AccessToken#static_account}

---



