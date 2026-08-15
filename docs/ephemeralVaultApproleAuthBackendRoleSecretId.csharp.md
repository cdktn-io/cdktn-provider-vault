# `ephemeralVaultApproleAuthBackendRoleSecretId` Submodule <a name="`ephemeralVaultApproleAuthBackendRoleSecretId` Submodule" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultApproleAuthBackendRoleSecretId <a name="EphemeralVaultApproleAuthBackendRoleSecretId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultApproleAuthBackendRoleSecretId(Construct Scope, string Id, EphemeralVaultApproleAuthBackendRoleSecretIdConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig">EphemeralVaultApproleAuthBackendRoleSecretIdConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig">EphemeralVaultApproleAuthBackendRoleSecretIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetBackend">ResetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetCidrList">ResetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNumUses">ResetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBackend` <a name="ResetBackend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetBackend"></a>

```csharp
private void ResetBackend()
```

##### `ResetCidrList` <a name="ResetCidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetCidrList"></a>

```csharp
private void ResetCidrList()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNumUses` <a name="ResetNumUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetNumUses"></a>

```csharp
private void ResetNumUses()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultApproleAuthBackendRoleSecretId.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultApproleAuthBackendRoleSecretId.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultApproleAuthBackendRoleSecretId.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrListInput">CidrListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUsesInput">NumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrList">CidrList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUses">NumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `CidrListInput`<sup>Optional</sup> <a name="CidrListInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrListInput"></a>

```csharp
public string[] CidrListInput { get; }
```

- *Type:* string[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NumUsesInput`<sup>Optional</sup> <a name="NumUsesInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUsesInput"></a>

```csharp
public double NumUsesInput { get; }
```

- *Type:* double

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `CidrList`<sup>Required</sup> <a name="CidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.cidrList"></a>

```csharp
public string[] CidrList { get; }
```

- *Type:* string[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NumUses`<sup>Required</sup> <a name="NumUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.numUses"></a>

```csharp
public double NumUses { get; }
```

- *Type:* double

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretId.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultApproleAuthBackendRoleSecretIdConfig <a name="EphemeralVaultApproleAuthBackendRoleSecretIdConfig" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultApproleAuthBackendRoleSecretIdConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string RoleName,
    string Backend = null,
    string[] CidrList = null,
    string Metadata = null,
    string MountId = null,
    string Namespace = null,
    double NumUses = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.roleName">RoleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.backend">Backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.cidrList">CidrList</a></code> | <code>string[]</code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.metadata">Metadata</a></code> | <code>string</code> | JSON-encoded secret data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.numUses">NumUses</a></code> | <code>double</code> | The number of uses for the secret-id. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.ttl">Ttl</a></code> | <code>double</code> | The TTL duration of the SecretID in seconds. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#role_name EphemeralVaultApproleAuthBackendRoleSecretId#role_name}

---

##### `Backend`<sup>Optional</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#backend EphemeralVaultApproleAuthBackendRoleSecretId#backend}

---

##### `CidrList`<sup>Optional</sup> <a name="CidrList" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.cidrList"></a>

```csharp
public string[] CidrList { get; set; }
```

- *Type:* string[]

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#cidr_list EphemeralVaultApproleAuthBackendRoleSecretId#cidr_list}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

JSON-encoded secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#metadata EphemeralVaultApproleAuthBackendRoleSecretId#metadata}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#mount_id EphemeralVaultApproleAuthBackendRoleSecretId#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#namespace EphemeralVaultApproleAuthBackendRoleSecretId#namespace}

---

##### `NumUses`<sup>Optional</sup> <a name="NumUses" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.numUses"></a>

```csharp
public double NumUses { get; set; }
```

- *Type:* double

The number of uses for the secret-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#num_uses EphemeralVaultApproleAuthBackendRoleSecretId#num_uses}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultApproleAuthBackendRoleSecretId.EphemeralVaultApproleAuthBackendRoleSecretIdConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

The TTL duration of the SecretID in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#ttl EphemeralVaultApproleAuthBackendRoleSecretId#ttl}

---



