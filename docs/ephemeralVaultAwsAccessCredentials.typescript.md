# `ephemeralVaultAwsAccessCredentials` Submodule <a name="`ephemeralVaultAwsAccessCredentials` Submodule" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultAwsAccessCredentials <a name="EphemeralVaultAwsAccessCredentials" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/aws_access_credentials vault_aws_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer"></a>

```typescript
import { ephemeralVaultAwsAccessCredentials } from '@cdktn/provider-vault'

new ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials(scope: Construct, id: string, config: EphemeralVaultAwsAccessCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig">EphemeralVaultAwsAccessCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig">EphemeralVaultAwsAccessCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct"></a>

```typescript
import { ephemeralVaultAwsAccessCredentials } from '@cdktn/provider-vault'

ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement"></a>

```typescript
import { ephemeralVaultAwsAccessCredentials } from '@cdktn/provider-vault'

ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultAwsAccessCredentials } from '@cdktn/provider-vault'

ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseRenewable">leaseRenewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseStartTime">leaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.securityToken">securityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseRenewable"></a>

```typescript
public readonly leaseRenewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.leaseStartTime"></a>

```typescript
public readonly leaseStartTime: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `securityToken`<sup>Required</sup> <a name="securityToken" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.securityToken"></a>

```typescript
public readonly securityToken: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultAwsAccessCredentialsConfig <a name="EphemeralVaultAwsAccessCredentialsConfig" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.Initializer"></a>

```typescript
import { ephemeralVaultAwsAccessCredentials } from '@cdktn/provider-vault'

const ephemeralVaultAwsAccessCredentialsConfig: ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the AWS secret engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.role">role</a></code> | <code>string</code> | AWS Secret Role to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.region">region</a></code> | <code>string</code> | Region the read credentials belong to. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.roleArn">roleArn</a></code> | <code>string</code> | ARN to use if multiple are available in the role. Required if the role has multiple ARNs. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.ttl">ttl</a></code> | <code>string</code> | User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.type">type</a></code> | <code>string</code> | Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the AWS secret engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/aws_access_credentials#mount EphemeralVaultAwsAccessCredentials#mount}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

AWS Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/aws_access_credentials#role EphemeralVaultAwsAccessCredentials#role}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/aws_access_credentials#mount_id EphemeralVaultAwsAccessCredentials#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/aws_access_credentials#namespace EphemeralVaultAwsAccessCredentials#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region the read credentials belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/aws_access_credentials#region EphemeralVaultAwsAccessCredentials#region}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

ARN to use if multiple are available in the role. Required if the role has multiple ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/aws_access_credentials#role_arn EphemeralVaultAwsAccessCredentials#role_arn}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/aws_access_credentials#ttl EphemeralVaultAwsAccessCredentials#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultAwsAccessCredentials.EphemeralVaultAwsAccessCredentialsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/aws_access_credentials#type EphemeralVaultAwsAccessCredentials#type}

---



